import React from 'react';
import './css/FaceRecognition.css'
  const FaceRecognition = ({feeling,age,gender,onLoadImage,box,imagePath,response}) => {

    const urlImage = document.querySelector('#urlimageinput')
    return (
      <div className="flex justify-center ">
          <div className="flex">
              <img  onLoad={() => onLoadImage(response)} id='inputImage'className='mt2' alt='' 
               {...(response.detection ?
                 {src: imagePath || urlImage.value } : {})} 
                 {...(!response.detection? {className:"dn"} : {})} 
                 {...(window.innerWidth <=411? {style:{width:window.innerWidth,height:'auto'}} 
                  : 
                  {style:{width:'30vw',height:'auto'}})} />

                <div className="pointer absolute" style={{width:box.widthRes,height:box.heightRes
                    ,marginLeft:box.marginLeft ,marginTop:box.marginTop
                    ,boxShadow: '0 0 0 3px cyan inset'}}>
                </div>
                  <div className="flex justify-center absolute" 
                  style={{width:'30vw',marginTop:box.marginTop+box.heightRes}}>
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