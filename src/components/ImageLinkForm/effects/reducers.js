import {
		   TEXT,
		   DETECTED,
		   IMAGE_REQUEST_PENDING,
		   IMAGE_REQUEST_SUCCESS,
		   IMAGE_REQUEST_FAILED,
           MULTIPALEINPUT,
           EMPTYINPUT,		   
		   RESET,
		   GETTINGIMAGE,
		   RESETINPUTIMAGE
} from './constants.js';

const initialSearchState = {
	search: ''
}
export const getSearch = (state=initialSearchState,action={}) => {
	switch (action.type) {
		case TEXT:
		    return Object.assign({},state,{search:action.payload});
		case RESET:
		    return initialSearchState;		    
	    default :
		    return state;
	}
}

const initialImageState = {
	predict: {},
	error: false,
	isPending: false,
	imageDims : ''
}

export const getImage = (state=initialImageState,action={}) => {
	switch (action.type) {
		case RESET :
		case TEXT :
		case GETTINGIMAGE :
		case RESETINPUTIMAGE :
		    return initialImageState
		case MULTIPALEINPUT :
		case EMPTYINPUT :
		    return Object.assign({},state, {error : action.payload ,imageDims:'',isPending:false,predict:{}});		         
		case IMAGE_REQUEST_PENDING :
			return Object.assign({},state,{isPending : action.payload ,imageDims:'',error:false,predict:{}});
		case IMAGE_REQUEST_SUCCESS :
			return Object.assign({},state,
				   {predict :action.payload,imageDims:action.imageDims,isPending:false,error:false});
		case IMAGE_REQUEST_FAILED :
			return Object.assign({},state, {error : action.payload ,imageDims:'',isPending:false,predict:{}});  			   
	    default :
		    return state;
	}
}  

const initialBoxState = {
	box: {},
	feeling:'',
    age:'',
    gender: ''
}

export const getBoxBorders = (state=initialBoxState,action={}) => {
	switch (action.type) {
		case RESET :
		case TEXT :
		case GETTINGIMAGE :
		case RESETINPUTIMAGE :
			return initialBoxState;
		case DETECTED :
			return Object.assign({},state,{box:action.payload,feeling:action.feeling,age:action.age,gender:action.gender});
	    default :
		    return state;
	}
}

const initialGetImageState ={
	image: '',
	imageName:'select image'
}
export const deviceImage = (state=initialGetImageState,action={}) => {
	 switch (action.type) {
	 	case RESETINPUTIMAGE :
			return initialGetImageState;	 	
		case GETTINGIMAGE :
			return Object.assign({},state, {image:action.payload,imageName:action.imageName});
	    default :
		    return state;
	}
} 