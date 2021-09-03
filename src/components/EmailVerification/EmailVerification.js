import React,{ useEffect} from 'react';

 const EmailVerification = ({email,sendEmail,verifyEmail}) => {
       useEffect(() => {
         sendEmail(email);
       }, [sendEmail,email])
       const code = document.querySelectorAll("input")[0].value
	  	return (
			     <div className="flex justify-center" style={{marginBlockStart:'5.5rem'}}>
			         <div className="shadow-5 pa2 black-80 "> 
                        <p className="f3 ph0 mh0 tc b black-80">Email validation</p>
                        <p className="f3 fw4 ph0 mh0 tc">
                           There is a code sent to <span className="f4 b dark-blue">{email}</span> 
                        </p>
                        <p className="f3 fw4 ph0 mh0 tc">
                           code : 
                        </p>
                        <input className="center b pa1" type="text" style={{'marginBlock':'0.5rem'}} />
                        <input onClick={() => {
                           const text = document.querySelectorAll("input")[0].value
                           verifyEmail(text)
                        }} 
                        className="center b ph2 pv1 input-reset b--dark-green bg-light-blue 
                         grow pointer f3 hover-bg-black hover-white" 
                        type="button" value="verfiy" style={{'marginBlock':'1.5rem'}} /> 
                     </div> 
                                  
			     </div>
	  	)
 }

export default EmailVerification;