import React from 'react';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
 const Home =(props)=> 
{
      const {user,response,onSearchChange,onButtonClick,error,onLoadImage,box,chooseImage} = props
      const {imageName,imagePath,feeling,age,gender} = props
	  	return (
	  		  <div>
              <Logo />
              <ImageLinkForm error={error} imagePath={imagePath} 
               onButtonClick={onButtonClick} onSearchChange={onSearchChange} chooseImage={chooseImage} 
               imageName={imageName}/>

              <FaceRecognition imagePath={imagePath} response={response} 
                onLoadImage={onLoadImage} box={box} 
                feeling={feeling} age={age} gender={gender} />
              
              </div>
  	    )
 }

export default Home;
