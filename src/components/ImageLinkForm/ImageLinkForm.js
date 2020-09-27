import React from 'react';
import './ImageLinkForm.css'
 const ImageLinkForm = () => {
  return (
	  <div className='center mt3'>
	  <div className='center w-50 shadow-5 pa3 background ba b--light-green'>
	  <input className='w-80' type='text' placeholder='Enter image URL'/>
	  <button className='ml2 pa1 bg-light-green pointer f3'>Submit</button>
	  </div>
	  </div>

  	)
 }
 export default ImageLinkForm;