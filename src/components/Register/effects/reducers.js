import {
	GO_HOME,
	REGISTER,
	SIGN_IN,
	DEFAULT
} from './constants.js'


const initialState = {
     route :  'signIn',
     default : false
}
export const getRoute = (state=initialState,action={}) => {
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