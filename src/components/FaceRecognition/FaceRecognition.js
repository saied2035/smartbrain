import React from 'react';
import './css/FaceRecognition.css'
  const FaceRecognition = ({feeling,age,gender,onLoadImage,box,imagePath,response}) => {

    const urlImage = document.querySelector('#urlimageinput')
    return (
      <div className="flex justify-center ">
          <div className="flex relative w-30-ns w-70-m w-90 mt2">
              <img  onLoad={() => onLoadImage(response)} id='inputImage' alt='' 
               {...(response.detection ?
                 {src: imagePath || urlImage.value } : {})} 
                 {...(!response.detection? {className:"dn"} : {})} 
                 style={{ minWidth: '100%' }}/>

                <div className="pointer absolute" style={{width: `${box.widthRes}%`,height: `${box.heightRes}%`
                    ,left: `${box.marginLeft}%` ,top: `${box.marginTop}%`
                    ,boxShadow: '0 0 0 3px cyan inset'}}>
                </div>
                  <div className="flex justify-center absolute" 
                  style={{ top:`${box.marginTop+box.heightRes}%`, left: `${box.marginLeft}%`}}>
                    <div id="result" className="mt1 bg-white f5 fw6">
                        <span>{feeling}</span>
                        <span className="db">{age}</span>
                        <span>{gender}</span>
                    </div>
                  </div>             
          </div>

                  
      </div>
    )
  }

export default FaceRecognition;