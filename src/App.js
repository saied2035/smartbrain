import React,{Component} from 'react';
import {connect} from 'react-redux';
import Nav from './components/Nav/Nav';
import EmailVerification from './components/EmailVerification/EmailVerification';
import Home from './components/Home/Home';
import Register from './components/SignIn&Register/Register/Register';
import SignIn from './components/SignIn&Register/SignIn/SignIn';
import {getSearchBar,getImageUrl,getBox,getImageFromDevice} from './components/ImageLinkForm/effects/actions';
import {setRoute,checkUser,compareUser,newUser
        ,removeErrorMsg} from './components/SignIn&Register/effects/actions'

import { sendEmail,verifyEmail } from './components/EmailVerification/effects/actions.js'       
import {store} from './index'
import './App.css';


const state = (state) => {
	return {
	search : state.getSearch.search,
    imageDims : state.getImage.imageDims,
    error : state.getImage.error,
    isPending : state.getImage.isPending,
    success: state.getImage.success,
    response : state.getImage.predict,
    box : state.getBoxBorders.box,
    feeling: state.getBoxBorders.feeling,
    age : state.getBoxBorders.age,
    gender : state.getBoxBorders.gender,
    route : state.getRoute.route,
    verfied : state.getRoute.verfied,
    signInEmail : state.getSignIn.email,
    signInPassword : state.getSignIn.password,
    isPendingServer : state.compareUserResults.isPending,
    successServer : state.compareUserResults.success,
    failedServer : state.compareUserResults.failed,
    user : state.compareUserResults.user,
    registerEmail : state.signNewUser.email,
    registerPassword : state.signNewUser.password,
    registerName : state.signNewUser.name,
    remove : state.getRemoveState.remove,
    verifyFailed: state.codeVerification.verifyFailed,
    imageDirection: state.deviceImage.image,
    imageName: state.deviceImage.imageName
	}
}
const action = (action) => {
  return {
     onSearchChange : (event) => action(getSearchBar(event.target)),
     onButtonClick : (text,imageWidth) => action(getImageUrl(text,imageWidth)),
     onLoadImage : (data) => action(getBox(data)),
     onRouteChange : (text) => action(setRoute(text)),
     onSignInSubmit : (event) => action(checkUser(event.target)),
     onRegisterSubmit : (event) =>  action(newUser(event.target)),
     onInsertUser : (email,password,name) => action(compareUser(email,password,name)),
     onInputClick : (event) => action(removeErrorMsg(event)),
     sendEmail : (email) => action(sendEmail(email)),
     verifyEmail: (text) => action(verifyEmail(text)),
     chooseImage : (event) => action(getImageFromDevice(event))
  }
}
class App extends  Component {


  render () {
      const {onSearchChange,onButtonClick,imageDims,error,onLoadImage,box,route,onRouteChange
        ,onSignInSubmit,onInputClick,feeling,age,gender} = this.props;
      const {onInsertUser,signInEmail,signInPassword,successServer,verfied,failedServer,remove} = this.props;
      const {onRegisterSubmit,registerEmail,registerPassword,registerName,response} = this.props;
      const {sendEmail,verifyEmail,verifyFailed,user,chooseImage,imageDirection,imageName} = this.props;
      return(
      <div className="App">
         
        <Nav onRouteChange={onRouteChange} onRegisterSubmit={onRegisterSubmit}
         onSignInSubmit={onSignInSubmit} onSearchChange={onSearchChange} route={route} />
        
        { 
        route==='signIn'?
         <SignIn 
         success={successServer} 
         failed ={failedServer}
         remove = {remove}
         onInputClick= {onInputClick}
         onInsertUser={onInsertUser} 
         email={signInEmail} 
         password={signInPassword}
         onSignInSubmit={onSignInSubmit} 
         onRouteChange={onRouteChange} />
         :
        ( 

         route==='register' ? 
         <Register 
         onRouteChange={onRouteChange} 
         onInsertUser={onInsertUser} 
         onRegisterSubmit={onRegisterSubmit}  
         email={registerEmail} 
         password={registerPassword}
         name={registerName} 
         success={successServer}
         failed ={failedServer}
         remove = {remove}
         onInputClick= {onInputClick} 
         />
         :
         verfied ?          
          <Home user={user} error={error} onButtonClick={onButtonClick} onSearchChange={onSearchChange}
                onLoadImage={onLoadImage} imageDims={imageDims} box={box} feeling={feeling} 
                age={age} gender={gender} chooseImage={chooseImage} response={response} 
                imageDirection={imageDirection} imageName={imageName} />
         :
          <div>
          <EmailVerification verifyEmail={verifyEmail} sendEmail={sendEmail} remove ={remove}
           email={signInEmail||registerEmail} failed={verifyFailed} onInputClick= {onInputClick}/>
          </div> 
        )
      }
       
      </div>
    )
  }

}

export default connect(state,action)(App);
