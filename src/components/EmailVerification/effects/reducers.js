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
    sendSuccess : '',
	sendFailed: ''
}
export const emailVerification = (state=sendEmailState,action={}) => {
	switch (action.type){
		case SENDING_EMAIL_PENDING :
			return Object.assign({},state, {isSendPending:action.payload,sendSuccess:'',sendFailed:''});
		case SENDING_EMAIL_SUCCESS :	
			return Object.assign({},state, {isSendPending:false,sendSuccess:'success',sendFailed:''});
		case SENDING_EMAIL_FAILED :
			return Object.assign({},state, {isSendPending:false,sendSuccess:'',sendFailed:action.payload});
		default :
			return sendEmailState;		
	}
}

const verifyEmailState = {
	isVerifyPending : false,
    verifySuccess : '',
	verifyFailed: ''
}

export const codeVerification = (state=verifyEmailState,action={}) => {
	switch (action.type){
		case VERIFIY_EMAIL_PENDING :
			return Object.assign({},state, {isVerifyPending:action.payload,verifySuccess:'',verifyFailed:''});
		case VERIFIY_EMAIL_SUCCESS :	
			return Object.assign({},state, {isVerifyPending:false,verifySuccess:'success',verifyFailed:''});
		case VERIFIY_EMAIL_FAILED :
			return Object.assign({},state, {isVerifyPending:false,verifySuccess:'',verifyFailed:action.payload});
		default :
			return verifyEmailState;		
	}
}

