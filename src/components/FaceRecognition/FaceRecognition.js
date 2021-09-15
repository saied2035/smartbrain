import React from 'react';
import './css/FaceRecognition.css'
  const FaceRecognition = ({imageDims,feeling,age,gender,onLoadImage,box,imageDirection,response}) => {

    const urlImage = document.querySelector('#urlimageinput')
    const body = document.querySelector('body').width
/*        if( urlImage !== null && urlImage.value.length && imageDirection.length){
      return(
            <p className='mw6 ma0 f5 center b dark-red georgia shadow-5 pa2 ph3' >
               you can't use the two methods at  the same time
            </p>
        )
    }*/
    return (
      <div className="flex justify-center ">
          <div className="flex">
              <img  onLoad={() => onLoadImage({response,imageDims})} id='inputImage'className='mt2' alt='' 
               {...(response.detection ?
                 {src: imageDirection || urlImage.value } : {})} 
                 {...(!response.detection? {className:"dn"} : {})} style={{width:'30vw',height:'auto'}} />

                <div className="absolute" style={{width:box.widthRes,height:box.heightRes
                    ,marginLeft:box.marginLeft ,marginTop:box.marginTop
                    ,boxShadow: '0 0 0 3px cyan inset'}}>
                </div>
                  <div className="flex justify-center absolute" 
                  style={{width:'30vw',marginTop:box.marginTop+box.heightRes}}>
                    <div className="mt2 bg-light-blue f5 fw6">
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