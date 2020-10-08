import React from 'react';
import './css/Register.css'
  const Register = ({onRouteChange}) => {
    return (
          <main className="center background shadow-5 pa2 black-80" style={{width:'30vw',height:'auto'}} >
            <article className="mw5 center br3 pa2-ns mv3">
              <div className="center flex-wrap">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0 tc b">Sign In</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f4" htmlFor="Username">Username</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-green w-100" 
                    type="text" name="username"  id="name" />
                  </div>
                  <div className="">
                    <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-light-green hover-green w-100" 
                    type="email" name="email"  id="email" />
                  </div>
                  <div className="">
                    <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-light-green hover-green w-100" 
                    type="password" name="password"  id="password" />
                  </div>
                </fieldset>
                <div>
                  <input onClick={() => {onRouteChange('home')}} 
                  className="b ph3 pv2 input-reset ba b--dark-green bg-transparent 
                  grow pointer f3 hover-bg-black hover-light-green" 
                  type="submit" value="Register" />
                </div>
                <div className="mt3"> 
                 <div className='center flex-wrap lh-solid'>
                    <p className="f4 ma0">have an account?</p>
                    <p onClick={() => {onRouteChange('signIn')}} 
                    className="b dib dim pointer ba pa3 tc shadow-2 f4 bg-light-green ba">sign in</p>
                  </div>
                </div>
              </div>
            </article>
          </main>

    )
  }

export default Register;

    // return (
    //       <main className="center background shadow-5 pa2 black-80" style={{width:'30vw',height:'auto'}} >
    //         <article className="mw5 center br3 pa2-ns mv3">
    //           <div className="center flex-wrap">
    //             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    //               <legend className="f1 fw6 ph0 mh0 tc b">Sign In</legend>
    //               <div className="mt3">
    //                 <label className="db fw6 lh-copy f4" hrmlFor="email-address">Email</label>
    //                 <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-green w-100" 
    //                 type="email" name="email-address"  id="email-address" />
    //               </div>
    //               <div className="mv3">
    //                 <label className="db fw6 lh-copy f4" hrmlFor="password">Password</label>
    //                 <input className="b pa2 input-reset ba bg-transparent hover-bg-light-green hover-green w-100" 
    //                 type="password" name="password"  id="password" />
    //               </div>
    //             </fieldset>
    //             <div>
    //               <input className="b ph3 pv2 input-reset ba b--dark-green bg-transparent 
    //               grow pointer f3 hover-bg-black hover-light-green" 
    //               type="submit" value="Sign in" />
    //               <div className='mt4 lh-copy'>
    //                 <p className="link dim pointer ba pa2 ma3 ma3 shadow-2 f4 bg-light-green ba">Sign in</p>
    //                 <p className="link dim pointer ba pa2 ma3 shadow-2 f4 bg-light-green ba">Register</p>
    //               </div>
    //             </div>
    //           </div>
    //         </article>
    //       </main>

    // )