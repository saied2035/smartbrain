import {
           TEXT,
           DETECTED,
           IMAGE_REQUEST_PENDING,
           IMAGE_REQUEST_SUCCESS,
           IMAGE_REQUEST_FAILED,
           RESET
} from './constants.js';



// searchValue
export const getSearchBar = (target) =>  {
  if(target===undefined) {
    return {
      type : RESET
    }
  }
 return {
     type : TEXT,
     payload : target.value
  }
}

// getImage and detect the face using Clarifai Api

export const getImageUrl = (text) => (request) => {
          request({type :IMAGE_REQUEST_PENDING, payload: true})
              fetch('http://localhost:3001/predict', {
                method: 'post',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    text:text
                })
             })
            .then(response => response.json())
            .then(response => 

              request(
                         
                         {
                              type :IMAGE_REQUEST_SUCCESS,
                              payload:response.outputs[0].data.regions[0].region_info.bounding_box,
                              image:text,
                          }
                      )
              )
            .catch(err => request({type :IMAGE_REQUEST_FAILED,payload: true})); 

}

//get the bounding box
export const getBox = (data) => {
         const image=document.getElementById('inputImage');
         const width=Number(image.width);
         const height=Number(image.height);
         const bottom= height-(data.bottom_row * height);
         const left= data.left_col* width;
         const right= width- (data.right_col*width);
         const top=data.top_row* height;
         const box= {top,right,bottom,left};
         return {
           type: DETECTED,
           payload : box
         }
 }
