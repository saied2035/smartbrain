import React,{Component} from 'react';
import {connect} from 'react-redux';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import {getSearchBar,getImageUrl,getBox} from './components/ImageLinkForm/effects/actions';
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
    box : state.getBoxBorders.box
	}
}
const action = (action) => {
  return {
     onSearchChange : (event) => action(getSearchBar(event.target.value)),
     onButtonClick : () => action(getImageUrl(store.getState().getSearch.search)),
     onLoadImage : () => action(getBox(store.getState().getImage.predict))
  }
}
class App extends  Component {



  render () {
      const {onSearchChange,onButtonClick,imageUrl,error,onLoadImage,box} = this.props;
    return (
      <div className="App">
        <Nav />
        <Logo />
        <ImageLinkForm error={error} onButtonClick={onButtonClick}
         onSearchChange={onSearchChange}/>
        <FaceRecognition onLoadImage={onLoadImage} imageUrl={imageUrl} box={box}/>
      </div>
    );
  }

}

export default connect(state,action)(App);
