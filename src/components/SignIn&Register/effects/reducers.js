import {
    GO_HOME,
    REGISTER,
    SIGN_IN,
    DEFAULT,
    SIGN_IN_EMAIL,
    SIGN_IN_PASSWORD,
    SIGN_IN_DEFAULT,
    SIGN_IN_REMOVE_ERROR_MSG,
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_NAME,
    REGISTER_DEFAULT,
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    USER_INFORMATION
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
   remove : false
}

export const getRemoveState = (state=initialErrorRemoveState,action={}) => {
	switch (action.type){
		case REQUEST_FAILED :
			return Object.assign({},state, {remove: false});
		case SIGN_IN_REMOVE_ERROR_MSG :
			return Object.assign({},state, {remove : true});
		default :
			return state;		
	}
}

const initialRouteState = {
      route :  'signIn',
      default : false,

}
export const getRoute = (state=initialRouteState,action={}) => {
	switch (action.type){
		case GO_HOME :
			return Object.assign({},state, {route:action.payload,default:false});
		case SIGN_IN :	
			return Object.assign({},state, {route:action.payload,default:false});
		case REGISTER :
			return Object.assign({},state, {route:action.payload,default:false});
		case DEFAULT :
			return Object.assign({},state, {default:true});
		default :
			return state;		
	}
}

const initialRequestState = {
	isPending : false,
	success: '',
	failed: '',
	user: {}
}

export const compareUserResults = (state=initialRequestState,action={}) => {
          
	switch (action.type){
		case REQUEST_PENDING :
			return Object.assign({},state, {user:{},isPending:action.payload,success:'',failed:''});
		case REQUEST_SUCCESS :	
			return Object.assign({},state, {user:action.payload,isPending:false,success:'success',failed:''});
		case REQUEST_FAILED :
			return Object.assign({},state, {user:{},isPending:false,success:'',failed:action.payload});
		default :
			return initialRequestState;		
	}
}

const initialUserState = {
	user: {}
}

export const userInformation = (state=initialUserState,action={}) => {
	switch (action.type){
		case USER_INFORMATION :
			return Object.assign({},state, {user:action.payload});
		default :
			return initialUserState;		
	}
}