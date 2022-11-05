import React from 'react';
import './css/ImageLinkForm.css'
import resetImage from './resetImage.png'
import resetImageUrl from './resetImageUrl.png'
 const ImageLinkForm = ({onSearchChange,onButtonClick,error,imagePath,chooseImage,imageName}) => {

		return (
			   <div>
			   <div className="flex flex-row-ns flex-column justify-center w-100-ns items-center" style={{ gap:'1rem 0' }}>
			      <div className="flex justify-center items-center pa1 ma0 mt3 shadow-5 background-image 
			                      ba b--light-green"
			           style={{marginBlock:0}}>
				      <input onChange={(event) => chooseImage(event) } className="dn" type="file" 
				       accept="image/*"/>
				      <div>
				      
				      <input onClick={() => {
				      	             const text = document.querySelectorAll("input")[0]
				      	              text.click()
				                   }} type="button" className="mw4 br2 pa1 fw6 f4 v-mid tc pointer" 
				                   style={{marginBlock:'0.5rem'}} value={imageName} />

				       <img alt='' className="absolute ma1 pointer" src={resetImage} 
				            onClick={(event) => {
				              const imageName = document.querySelectorAll('input')[1].value
				              document.querySelectorAll("input")[0].value = null	
				              imageName !== "select image"?
				                chooseImage(event)				                
				              :
                                event.target.click()
				            }} />                       
                       </div> 
                       <span className="v-med pa2 fw6 ml3 f4 white">or</span>
                       <div className='di'>
                      <input onChange={onSearchChange} id='urlimageinput' className='br3 fw6 v-mid ma1 pa2 bg-white' 
					   type='text' placeholder='Enter image URL (jpg,jpeg or png)'
					   style={{width:'96%'}}/>

                       <img alt='' className="absolute pointer" src={resetImageUrl}
                             style= {{marginLeft:'-1rem'}} 
				            onClick={(event) => {
				              const urlImage = document.querySelectorAll('input')[2].value
				              	document.querySelectorAll('input')[2].value = ''
				              urlImage?
				                onSearchChange('reset')				                
				              :
                                event.target.click()
				            }} />
				         </div>   
				      </div>
					  <input onClick={() => {
					  	 const urlImage = document.querySelectorAll('input')[2]
                         const deviceImage = imagePath.replace(/^data:image\/(jpeg|jpg|png|bmp|gif|tiff);base64,/i, "")
                         deviceImage.length && urlImage.value ? 
                           onButtonClick("multipaleInput")
                         :  
                           onButtonClick(deviceImage||urlImage.value,window.innerWidth)
					    }} type="submit" 
					  className='fw6 v-mid pa1 dark-red ma0 ml2 bg-white pointer f3 grow' value="Detect" /> 			   	
			   </div>
			            {
                          error.length ?
                          <div className='flex justify-center'>
                           <p className='ma0 f5 b dark-red georgia shadow-5 pa2 ph3'>{error}</p>
                          </div>
                          :
                          <p className='dn'></p>
                        } 
               </div>

  	    )
 }

export default ImageLinkForm;