import React from 'react';

 const Nav = ({onSearchChange,user,onRouteChange,onRegisterSubmit,onSignInSubmit,getUserInformation,route}) => {
 	if(user!==null || route==='home'){
  return (
   <div className='flex justify-end'>
	   <p onClick={() => {
      window.localStorage.removeItem("user")
      onSignInSubmit('reset')
      onRegisterSubmit('reset')
      onRouteChange('signIn')
      onSearchChange('reset')
    }} 
	   className='link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba '>sign out</p>
   </div>
  );
  }
  if(route==='signIn'){
  	  return (
   <div className='flex justify-end'>
	   <p onClick={() => {
      onSignInSubmit('reset')
      onRouteChange('register')
    }} 
	   className='link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba '>register</p>
   </div>
  );
  }

    if(route==='register'){
      return (
   <div className='flex justify-end'>
     <p onClick={() => {
      onRegisterSubmit('reset')
      onRouteChange('signIn')
    }} 
     className='link dim pointer pa2 ma3 shadow-2 f3 bg-light-green ba '>sign in</p>
   </div>
  );
  }
 }
 
export default Nav;