import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './logo.css'
 const Logo = () => {
	 return (
	  	<div className="center">
		  	<div className="ma1">
			  	<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
					<div className=' pa3 shadow-5 logo grow ba '>
					    <div className='br-100'>
							<img src={brain} alt='Logo' />
						</div>
					</div>
				</Tilt>
			</div>
			<h1 className='f1 ma3 dark-blue'>Face Recognition</h1>	
		</div>
	 	
	 );	
 }
 
export default Logo;