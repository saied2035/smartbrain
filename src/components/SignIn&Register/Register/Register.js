import React,{Component} from 'react';
import './css/Register.css'
  class Register extends Component   {
  
    render(){
      const {onRouteChange,onRegisterSubmit,onInsertUser,name,email,password
             ,onInputClick,failed,remove} = this.props
    return (
          <div className="center background shadow-5 w-33-ns w-60-m w-90">
              <div className="mt3">
                <fieldset id="sign_up" className="center ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0 tc b">Register</legend>
                      <div>
                        <div {...(failed.length? {className:"mt0"}: {className:"mt1"})}>
                          <label className="db fw6 lh-copy f4" htmlFor="Username">Username</label>
                          <input className="b pa2 ba w-100" onChange={onRegisterSubmit}
                          {...(failed.length? {onMouseEnter:onInputClick}: {})} 
                          type="text" name="username"  id="name" />
                        </div>
                        <div {...(failed.length? {className:"mt0"}: {className:"mt1"})}>
                          <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                          <input className="b pa2 ba w-100" onChange={onRegisterSubmit}
                          {...(failed.length? {onMouseEnter:onInputClick}: {})} 
                          type="email" name="email"  id="email" />
                        </div>
                        <div {...(failed.length? {className:"mt0"}: {className:"mt1"})}>
                          <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                          <input className="b pa2 ba w-100" onChange={onRegisterSubmit}
                          {...(failed.length? {onMouseEnter:onInputClick}: {})}
                          type="password" name="password"  id="password" />
                        </div>
                      </div>
                </fieldset>
                <div>
                  <input onClick={() => onInsertUser({email,password,name})} className="center b ph3 pv2 
                  b--dark-green bg-white grow pointer f3 hover-bg-black hover-white" type="submit" 
                  value="Register" />
                </div>
                <div className ="mt3"> 
                    {
                      remove?
                      (<p className='dn'>{failed}</p>)
                      :
                      (<p className='ma0 f5 tc b dark-red georgia shadow-5 pa2 ph3'>{failed}</p>)
                    }
                    <p className="tc f4 mt4 ma0" style={{marginBlockEnd:'0.5rem'}}>have an account?</p>
                    <input onClick={() => {
                          onRegisterSubmit('reset')
                          onRouteChange('signIn')
                      }
                    } 
                    type="button" value="sign in" className="center mw4 ma0 b dim pointer pa2 shadow-2 
                     f4 bg-light-green ba" style={{marginBlockEnd:'1rem'}}/>
                </div>
              </div>
          </div>

    )
    }
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