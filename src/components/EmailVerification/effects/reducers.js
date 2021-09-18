import {
    SENDING_EMAIL_PENDING,
    SENDING_EMAIL_SUCCESS,
    SENDING_EMAIL_FAILED,
    VERIFIY_EMAIL_PENDING,
    VERIFIY_EMAIL_SUCCESS,
    VERIFIY_EMAIL_FAILED
} from './constants.js' 

const sendEmailState = {
	isSendPending : false,
	sendFailed: ''
}
export const emailVerification = (state=sendEmailState,action={}) => {
	switch (action.type){
		case SENDING_EMAIL_PENDING :
			return Object.assign({},state, {isSendPending:action.payload,sendFailed:''});
		case SENDING_EMAIL_SUCCESS :	
			return Object.assign({},state, {isSendPending:false,sendFailed:''});
		case SENDING_EMAIL_FAILED :
			return Object.assign({},state, {isSendPending:false,sendFailed:action.payload});
		default :
			return sendEmailState;		
	}
}

const verifyEmailState = {
	isVerifyPending : false,
	verifyFailed: ''
}

export const codeVerification = (state=verifyEmailState,action={}) => {
	switch (action.type){
		case VERIFIY_EMAIL_PENDING :
			return Object.assign({},state, {isVerifyPending:action.payload,verifyFailed:''});
		case VERIFIY_EMAIL_SUCCESS :	
			return Object.assign({},state, {isVerifyPending:false,verifyFailed:''});
		case VERIFIY_EMAIL_FAILED :
			return Object.assign({},state, {isVerifyPending:false,verifyFailed:action.payload});
		default :
			return verifyEmailState;		
	}
}

