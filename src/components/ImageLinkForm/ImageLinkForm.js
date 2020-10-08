import React from 'react';
import './css/ImageLinkForm.css'

 const ImageLinkForm = ({onSearchChange,onButtonClick,error}) => {
	if(error) {
	  	return (
			  <div style={{width:'70vw', height : 'auto'}} 
			  className='center mt3 shadow-5 pa3 background-image ba b--light-green flex-wrap'>
				  <input onChange={onSearchChange} className='shadow-5 b--red bg-light-green w-80' type='text'/>
				  <button onClick={onButtonClick} className='ml2 bg-light-green pointer f3 grow'>Detect</button>
				  <strong className="shadow-4 mt1 f4 navy">{`you didn't enter a vaild image format`}</strong>
			  </div>
	  	)
	}

		return (
			  <div style={{width:'70vw', height:'auto'}} className='center mt3 shadow-5 pa3 background-image ba b--light-green '>
				  <input onChange={onSearchChange} className='w-80 bg-light-green' type='text' 
				   placeholder='Enter image URL (jpg,jpeg or png only)'/>
				  <button onClick={onButtonClick} className='ml2 pa1 bg-light-green pointer f3 grow'>Detect</button>
			  </div>

  	    )
 }

export default ImageLinkForm;