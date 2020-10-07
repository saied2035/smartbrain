import React from 'react';
import './FaceRecognition.css'
 const FaceRecognition = ({imageUrl,onLoadImage,box}) => {
  return (
   <div className="center">
      <div className="absolute mt2">
  	   <img onLoad={onLoadImage} id='inputImage' alt='' src={imageUrl} className="center" 
       style={{width:'70vh',height:'auto'}} />
       <div className="box_bo" style={{top:box.top ,right:box.right ,bottom:box.bottom ,left:box.left}}></div>
     </div>
     </div>
  	)
  }

 export default FaceRecognition;