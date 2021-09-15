import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import { getSearch,getImage,getBoxBorders,deviceImage} from './components/ImageLinkForm/effects/reducers';
import {getRoute,getSignIn,compareUserResults,signNewUser
	    ,getRemoveState} from  './components/SignIn&Register/effects/reducers';

import { emailVerification, codeVerification } from './components/EmailVerification/effects/reducers.js'  	
import './index.css';
import App from './App';
import 'tachyons'
import * as serviceWorker from './serviceWorker';
    
   const logger = createLogger() 
   const rootReducer = combineReducers({getSearch,getImage,getBoxBorders,getRoute,getSignIn,
   	compareUserResults,signNewUser,getRemoveState,emailVerification,codeVerification,deviceImage})
   export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
     <Provider store={store}>
	     <App />
     </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
