import {
		   TEXT,
		   DETECTED,
		   IMAGE_REQUEST_PENDING,
		   IMAGE_REQUEST_SUCCESS,
		   IMAGE_REQUEST_FAILED
} from './constants.js';

const initialSearchState = {
	search: ''
}
export const getSearch = (state=initialSearchState,action={}) => {
	switch (action.type) {
		case TEXT:
		    return Object.assign({},state,{search:action.payload});
	    default :
		    return state;
	}
}

const initialImageState = {
	predict: {},
	error: false,
	isPending: false,
	success: '',
	image : ''
}

export const getImage = (state=initialImageState,action={}) => {
	switch (action.type) {
		case IMAGE_REQUEST_PENDING :
			return Object.assign({},state, {isPending : action.payload ,image:'',error:false,predict:{}});
		case IMAGE_REQUEST_SUCCESS :
			return Object.assign({},state, {predict : action.payload ,image:action.image,isPending:false,error:false});
		case IMAGE_REQUEST_FAILED :
			return Object.assign({},state, {error : action.payload ,image:'',isPending:false,predict:{}});   
	    default :
		    return state;
	}
}  

const initialBoxState = {
	box: {
		top:'',
		right:'',
		bottom:'',
		left:''
	}
}

export const getBoxBorders = (state=initialBoxState,action={}) => {
	switch (action.type) {
		case DETECTED :
			return Object.assign({},state, {box:action.payload});
	    default :
		    return state;
	}
}  