import {getSearchBar,getImageUrl,getBox,getImageFromDevice} from './components/ImageLinkForm/effects/actions';
import {setRoute,checkUser,compareUser,newUser
        ,removeErrorMsg} from './components/SignIn&Register/effects/actions'

import { sendEmail,verifyEmail } from './components/EmailVerification/effects/actions.js'

export const action = (action) => {
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