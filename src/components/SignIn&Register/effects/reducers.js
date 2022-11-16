import {
    REGISTER,
    SIGN_IN,
    SIGN_IN_EMAIL,
    SIGN_IN_PASSWORD,
    SIGN_IN_DEFAULT,
    REMOVE_ERROR_MSG,
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_NAME,
    REGISTER_DEFAULT,
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    VERIFIY_EMAIL_SUCCESS,
    VERIFIY_EMAIL_FAILED
} from './constants.js'

const initialSignInState = {
      email : '',
      password : ''
}
export const getSignIn = (state=initialSignInState,action={}) => {
	switch (action.type){
		case SIGN_IN_EMAIL :
			return Object.assign({},state, {email:action.payload});
		case SIGN_IN_PASSWORD :	
			return Object.assign({},state, {password:action.payload});
		case SIGN_IN_DEFAULT :
			return Object.assign({},state, {email:'',password:''});
		default :
			return state;		
	}
}

const initialRegisterState = {
      email : '',
      password : '',
      name : '',
}
export const signNewUser = (state=initialRegisterState,action={}) => {
	switch (action.type){
		case REGISTER_EMAIL :
			return Object.assign({},state, {email:action.payload});
		case REGISTER_PASSWORD :	
			return Object.assign({},state, {password:action.payload});
		case REGISTER_NAME :	
			return Object.assign({},state, {name:action.payload});			
		case REGISTER_DEFAULT :
			return Object.assign({},state, {email:'',password:'',name:''});
		default :
			return state;		
	}
}

const initialErrorRemoveState = {
   remove : true
}

export const getRemoveState = (state=initialErrorRemoveState,action={}) => {
	switch (action.type){
		case VERIFIY_EMAIL_FAILED:
			return Object.assign({},state, {remove: false});		    
		case REQUEST_FAILED :
			return Object.assign({},state, {remove: false});
		case REMOVE_ERROR_MSG :
			return Object.assign({},state, {remove : true});
		default :
			return state;		
	}
}

const initialRouteState = {
      route :  'signIn'

}
export const getRoute = (state=initialRouteState,action={}) => {
	switch (action.type){
		case VERIFIY_EMAIL_SUCCESS :
		case REQUEST_SUCCESS :
			return Object.assign({},state, {route:'home'});		
		case SIGN_IN :	
			return Object.assign({},state, {route:action.payload});
		case REGISTER :
			return Object.assign({},state, {route:action.payload});
		default :
			return state;		
	}
}

const initialRequestState = {
	isPending : false,
	failed: '',
	user: {}
}

export const compareUserResults = (state=initialRequestState,action={}) => {
          
	switch (action.type){
		case REQUEST_PENDING :
			return Object.assign({},state, {user:{},isPending:action.payload,success:'',failed:''});
		case VERIFIY_EMAIL_SUCCESS : 	
		case REQUEST_SUCCESS :	
			return Object.assign({},state, {user:action.payload,isPending:false,success:'success',failed:''});
		case REQUEST_FAILED :
			return Object.assign({},state, {user:{},isPending:false,success:'',failed:action.payload});
		default :
			return initialRequestState;		
	}
}
