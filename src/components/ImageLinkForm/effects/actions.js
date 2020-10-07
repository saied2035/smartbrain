import {
	    TEXT,
      DETECTED,
	    IMAGE_REQUEST_PENDING,
		  IMAGE_REQUEST_SUCCESS,
		  IMAGE_REQUEST_FAILED
} from './constants.js';

import Clarifai from 'clarifai'

export const getSearchBar = (text="") => ({
     type : TEXT,
     payload : text
}
)
const app = new Clarifai.App({
  apiKey: 'aa5f028272e1463088b19faa78ebb744'
});
export const getImageUrl = (text) => (request) => {
    request({type :IMAGE_REQUEST_PENDING, payload: true})
       app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        text      
      )
      .then(response => 

        request(
                   
                  {
                  type :IMAGE_REQUEST_SUCCESS,
                  payload:response.outputs[0].data.regions[0].region_info.bounding_box
                  ,image:text,
                  }
                  )
          )
      .catch(err => request({type :IMAGE_REQUEST_FAILED,payload: true})); 
}

export const getBox = (data) => {
     const image=document.getElementById('inputImage');
     const width=Number(image.width);
     const height=Number(image.height);
     const bottom= height-(data.bottom_row * height);
     const left= data.left_col* width;
     const right= width- (data.right_col*width);
     const top=data.top_row* height;
     const box= {top,right,bottom,left};
        console.log(height,width,data);
    return {
      type: DETECTED,
      payload : box
    }
 }
