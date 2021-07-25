import React,{Component} from 'react';
import {connect} from 'react-redux';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/SignIn&Register/Register/Register';
import SignIn from './components/SignIn&Register/SignIn/SignIn';
import {getSearchBar,getImageUrl,getBox} from './components/ImageLinkForm/effects/actions';
import {setRoute,checkUser,compareUser,newUser,getUserDetailes} from './components/SignIn&Register/effects/actions'
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
    route : state.getRoute.route,
    signInEmail : state.getSignIn.email,
    signInPassword : state.getSignIn.password,
    isPendingServer : state.compareUserResults.isPending,
    successServer : state.compareUserResults.success,
    failed : state.compareUserResults.failed,
    registerEmail : state.signNewUser.email,
    registerPassword : state.signNewUser.password,
    registerName : state.signNewUser.name,
    requestUser: state.compareUserResults.user,
    user : state.userInformation.user
	}
}
const action = (action) => {
  return {
     onSearchChange : (event) => action(getSearchBar(event.target)),
     onButtonClick : () => action(getImageUrl(store.getState().getSearch.search)),
     onLoadImage : () => action(getBox(store.getState().getImage.predict)),
     onRouteChange : (text) => action(setRoute(text)),
     onSignInSubmit : (event) => action(checkUser(event.target)),
     onRegisterSubmit : (event) =>  action(newUser(event.target)),
     onInsertUser : (email,password,name) => action(compareUser(email,password,name)), 
     getUserInformation : (user) => action(getUserDetailes(user))
  }
}
class App extends  Component {


  render () {
      const {onSearchChange,onButtonClick,imageUrl,error,onLoadImage,box,route,onRouteChange,onSignInSubmit} = this.props;
      const {onInsertUser,signInEmail,signInPassword,successServer} = this.props;
      const {onRegisterSubmit,registerEmail,registerPassword,registerName} = this.props;
      const {requestUser,getUserInformation} = this.props;
      return(
      <div className="App">
        <Nav onRouteChange={onRouteChange} onRegisterSubmit={onRegisterSubmit}
         onSignInSubmit={onSignInSubmit} onSearchChange={onSearchChange}
         getUserInformation={getUserInformation} route={route} />
        
        { 
        route==='signIn'?
         <SignIn 
         success={successServer} 
         onInsertUser={onInsertUser} 
         email={signInEmail} 
         password={signInPassword} 
         user={requestUser} 
         getUserInformation={getUserInformation}
         onSignInSubmit={onSignInSubmit} 
         onRouteChange={onRouteChange} />
         :
        ( 

         route==='register' ? 
         <Register 
         onRouteChange={onRouteChange} 
         onInsertUser={onInsertUser} 
         onRegisterSubmit={onRegisterSubmit} 
         onSignInSubmit={onSignInSubmit} 
         email={registerEmail} 
         password={registerPassword}
         user={requestUser} 
         getUserInformation={getUserInformation}
         name={registerName} 
         success={successServer} />
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
