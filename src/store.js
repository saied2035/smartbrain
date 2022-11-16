import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { getSearch,getImage,getBoxBorders,deviceImage} from './components/ImageLinkForm/effects/reducers';
import {getRoute,getSignIn,compareUserResults,signNewUser
	    ,getRemoveState} from  './components/SignIn&Register/effects/reducers';
import { emailVerification, codeVerification } from './components/EmailVerification/effects/reducers.js'

const rootReducer = combineReducers({getSearch,getImage,getBoxBorders,getRoute,getSignIn,
   	  compareUserResults,signNewUser,getRemoveState,emailVerification,codeVerification,deviceImage})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware)); 
