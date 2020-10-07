import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { getSearch,getImage,getBoxBorders} from './components/ImageLinkForm/effects/reducers';
import './index.css';
import App from './App';
import 'tachyons'
import * as serviceWorker from './serviceWorker';

   const rootRducer = combineReducers({getSearch,getImage,getBoxBorders})
   const logger=createLogger();
   export const store = createStore(rootRducer,applyMiddleware(thunkMiddleware,logger));
   
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
