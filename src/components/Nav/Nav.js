import React from 'react';

 const Nav = ({onRouteChange,route}) => {
 	if(route==='home'){
  return (
   <div className='flex justify-end'>
	   <p onClick={() => {onRouteChange('signIn')}} 
	   className='link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba '>sign out</p>
   </div>
  );
  }
  if(route==='signIn'){
  	  return (
   <div className='flex justify-end'>
	   <p onClick={() => {onRouteChange('register')}} 
	   className='link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba '>register</p>
   </div>
  );
  }

    if(route==='register'){
      return (
   <div className='flex justify-end'>
     <p onClick={() => {onRouteChange('signIn')}} 
     className='link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba '>sign in</p>
   </div>
  );
  }

 }
 
export default Nav;