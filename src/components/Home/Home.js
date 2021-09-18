import React from 'react';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
 const Home =
 ({remove,onInputClick,user,response,onSearchChange,onButtonClick,error,onLoadImage,box,chooseImage,imageName,imagePath,feeling,age,gender})=> 
{
	  	return (
	  		  <div>
              <Logo />
              <ImageLinkForm onInputClick= {onInputClick} remove={remove} error={error} imagePath={imagePath} 
               onButtonClick={onButtonClick} onSearchChange={onSearchChange} chooseImage={chooseImage} 
               imageName={imageName}/>

              <FaceRecognition imagePath={imagePath} response={response} 
                onLoadImage={onLoadImage} box={box} 
                feeling={feeling} age={age} gender={gender} />
              
              </div>
  	    )
 }

export default Home;