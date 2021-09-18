import React,{Component} from 'react';
import {connect} from 'react-redux';
import Nav from './components/Nav/Nav';
import EmailVerification from './components/EmailVerification/EmailVerification';
import Home from './components/Home/Home';
import Register from './components/SignIn&Register/Register/Register';
import SignIn from './components/SignIn&Register/SignIn/SignIn';
import './App.css';
import {action} from './parentOfActions.js'
import {reducer} from './parentOfReducers.js'

class App extends  Component {
 

  render () {
      const {onSearchChange,onButtonClick,error,onLoadImage,box,route,onRouteChange
        ,onSignInSubmit,onInputClick,feeling,age,gender} = this.props;
      const {onInsertUser,signInEmail,signInPassword,failedServer,remove} = this.props;
      const {onRegisterSubmit,registerEmail,registerPassword,registerName,response} = this.props;
      const {sendEmail,verifyEmail,verifyFailed,user,chooseImage,imagePath,imageName} = this.props;
      return(
      <div className="App">
        <Nav user={user} onRouteChange={onRouteChange} onRegisterSubmit={onRegisterSubmit}
         onSignInSubmit={onSignInSubmit} onSearchChange={onSearchChange} route={route} />
        
        { 
        route==='signIn' && user === null?
         <SignIn  
         failed ={failedServer}
         remove = {remove}
         onInputClick= {onInputClick}
         onInsertUser={onInsertUser} 
         email={signInEmail} 
         password={signInPassword}
         onSignInSubmit={onSignInSubmit} 
         onRouteChange={onRouteChange} />
         :
         route==='register' && user==null ? 
         <Register 
         onRouteChange={onRouteChange} 
         onInsertUser={onInsertUser} 
         onRegisterSubmit={onRegisterSubmit}  
         email={registerEmail} 
         password={registerPassword}
         name={registerName} 
         failed ={failedServer}
         remove = {remove}
         onInputClick= {onInputClick} 
         />
         :
         user.verified ?          
          <Home user={user} error={error} onButtonClick={onButtonClick} onSearchChange={onSearchChange}
                onLoadImage={onLoadImage} box={box} feeling={feeling} 
                age={age} gender={gender} chooseImage={chooseImage} response={response} 
                imagePath={imagePath} imageName={imageName} />
         :
          <div>
          <EmailVerification verifyEmail={verifyEmail} sendEmail={sendEmail} remove ={remove}
           email={user.email} failed={verifyFailed}/>
          </div> 
      }  
      </div>
    )
  }

}

export default connect(reducer,action)(App);
