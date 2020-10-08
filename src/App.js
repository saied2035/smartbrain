import React,{Component} from 'react';
import {connect} from 'react-redux';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';

import {getSearchBar,getImageUrl,getBox} from './components/ImageLinkForm/effects/actions';
import {setRoute} from './components/Register/effects/actions'
import {store} from './index'
import './App.css';


const state = (state) => {
	return {
		search : state.getSearch.search,
    imageUrl : state.getImage.image,
    error : state.getImage.error,
    isPending : state.getImage.isPending,
    success: state.getImage.success,
    response : state.getImage.predict,
    box : state.getBoxBorders.box,
    route : state.getRoute.route
	}
}
const action = (action) => {
  return {
     onSearchChange : (event) => action(getSearchBar(event.target.value)),
     onButtonClick : () => action(getImageUrl(store.getState().getSearch.search)),
     onLoadImage : () => action(getBox(store.getState().getImage.predict)),
     onRouteChange : (text) => action(setRoute(text))
  }
}
class App extends  Component {



  render () {
      const {onSearchChange,onButtonClick,imageUrl,error,onLoadImage,box,route,onRouteChange} = this.props;
      return(
      <div className="App">
        <Nav onRouteChange={onRouteChange} route={route} />
        { 
        route==='signIn'?
         <SignIn onRouteChange={onRouteChange} />
         :
        ( 

         route==='register' ? 
         <Register onRouteChange={onRouteChange} />
         :
         <div>
        <Logo />
        <ImageLinkForm error={error} onButtonClick={onButtonClick}
         onSearchChange={onSearchChange}/>
        <FaceRecognition onLoadImage={onLoadImage} imageUrl={imageUrl} box={box}/>
        </div>
        )
      }
      </div>
    )
  }

}

export default connect(state,action)(App);
