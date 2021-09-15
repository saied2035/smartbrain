import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './logo.css'
 const Logo = () => {
	 return (
	  	<div className="center">
			  	<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
							<img className='ma0 pa3 shadow-5 logo grow ba' src={brain} alt='Logo' />
				</Tilt>
			<h1 style={{marginBlock: 'auto'}} className='f1 ma0 dark-blue'>Face Recognition</h1>	
		</div>
	 	
	 );	
 }
 
export default Logo;

/*	  	<div className="center">
		  	<div className="ma0">
			  	<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
					<div className=' pa3 shadow-5 logo grow ba '>
					    <div className='br-100'>
							<img src={brain} alt='Logo' />
						</div>
					</div>
				</Tilt>
			</div>
			<h1 style={{marginBlock: 0,lineHeight:3}} className='f1 ma3 dark-blue'>Face Recognition</h1>	
		</div>*/