import React from 'react';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
 const Home =
 ({user,response,onSearchChange,onButtonClick,error,onLoadImage,imageDims,box,chooseImage,imageName,imageDirection,feeling,age,gender})=> 
{
	  	return (
	  		  <div>
              <Logo />
              <ImageLinkForm error={error} imageDirection={imageDirection} onButtonClick={onButtonClick}
               onSearchChange={onSearchChange} chooseImage={chooseImage} imageName={imageName}/>
              <FaceRecognition imageDirection={imageDirection} response={response} 
                onLoadImage={onLoadImage} imageDims={imageDims} box={box} 
                feeling={feeling} age={age} gender={gender} />
              
              </div>
  	    )
 }

export default Home;