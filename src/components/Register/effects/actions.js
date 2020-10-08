import {
	GO_HOME,
	REGISTER,
	SIGN_IN,
	DEFAULT
} from  './constants.js'

export const setRoute = (text) => {
    if(text==='home'){
    	return {
    		type : GO_HOME,
    		payload : text
    	}
    }

    else if(text==='signIn'){
    	return {
    		type : SIGN_IN,
    		payload : text
    	}
    } 

    else if(text==='register'){
    	return {
    		type : REGISTER,
    		payload : text
    	}
    }

    else {
    	return {
    		type : DEFAULT,
    		payload : true
    	}
    }         
} 