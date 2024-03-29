import {
           TEXT,
           DETECTED,
           IMAGE_REQUEST_PENDING,
           IMAGE_REQUEST_SUCCESS,
           IMAGE_REQUEST_FAILED,
           MULTIPALEINPUT,
           EMPTYINPUT,
           GETTINGIMAGE,
           RESETINPUTIMAGE,
           RESET
} from './constants.js';

import {imageToBase64} from './functions.js'

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
          if(text==="multipaleInput"){
            request({type :MULTIPALEINPUT, payload: `you can't use the two methods at the same time`})
          }
          else if(!text.length){
            request({type :EMPTYINPUT, payload: `you didn't give any input to detect`})
          }  

          else {
            request({type :IMAGE_REQUEST_PENDING, payload: true})
                fetch(`${process.env.REACT_APP_BASE_URL}/predict`, {
                  method: 'post',
                  headers: {'content-type':'application/json'},
                  body: JSON.stringify({
                      text:text,
                  })
               })
              .then(response => response.json())
              .then(response =>{
                if(response.error) {
                  request(
                                {
                                  type :IMAGE_REQUEST_FAILED,
                                  payload: response.error
                                }
                            )
                }
                else if(!response.detection){
                  request(
                           {
                             type: IMAGE_REQUEST_FAILED,
                             payload:"there is no face in the image."
                           } 
                         )                  
                }
                else{
                        request(
                           
                           {
                                type :IMAGE_REQUEST_SUCCESS,
                                payload:response
                            }
                        )
                }
               })
              .catch( err => 
                     request(
                                {
                                  type :IMAGE_REQUEST_FAILED,
                                  payload:"image not found or invalid image."
                                }
                            )
                   );            
          }
 

}

//get the bounding box
export const getBox = (data) => {
         let feeling
         let max= 0
         for(const expression in data.expressions){
              if(data.expressions[expression] > max){
                 feeling = `mood: ${expression}`
                 max = data.expressions[expression] 
              }
         }
         const age = 'age: ' + data.age %  1 > 0.5 ? parseInt(data.age) + 1 : parseInt(data.age) + ' years' 
         const gender = 'gender: '+ data.gender
         const heightRes = (data.detection._box._height / data.detection._imageDims._height) * 100;
         const widthRes = (data.detection._box._width / data.detection._imageDims._width) * 100;
         const marginLeft = (data.detection._box._x / data.detection._imageDims._width) * 100;
         const marginTop= (data.detection._box._y / data.detection._imageDims._height) * 100;
         const box= {heightRes,widthRes,marginLeft,marginTop};
         return {
           type: DETECTED,
           payload : box,
           feeling,
           age,
           gender
         }
 }

 export const getImageFromDevice = (event) => (request) => {
    // const formData = new FormData();     
    // formData.append('file', event.target.files[0]);
    if(!event.target.files){
      request({type : RESETINPUTIMAGE})
    }
     else {
           const imageName =  event.target.value.substring(12)
           
           imageToBase64(event.target.files[0]).then(data => {
               request(
                        {
                          type: GETTINGIMAGE,
                          payload : data,
                          imageName : imageName
                        }
                      )             
           })
    
     }  

}

