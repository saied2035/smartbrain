import React,{Component} from 'react';
import './css/Register.css'
  class Register extends Component   {
  
    render(){
      const {onRouteChange,onRegisterSubmit,onInsertUser,name,email,password
             ,onInputClick,failed,remove} = this.props
    return (
          <main className="center background shadow-5 pa2 black-80" style={{width:'34vw',height:'85vh'}} >
            <article className="mw5 center br3 pa2-ns mv3">
              <div className="center flex-wrap">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0 tc b">Register</legend>
                  {
                    failed.length ?
                    <div>
                        <div className="ma0">
                          <label className="db fw6 lh-copy f4" htmlFor="Username">Username</label>
                          <input className="pa2 input-reset ba w-100" onMouseEnter={onInputClick} 
                          onChange={onRegisterSubmit} type="text" name="username"  id="name" />
                        </div>
                        <div className="ma0">
                          <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                          <input className="pa2 input-reset ba w-100" onMouseEnter={onInputClick} 
                          onChange={onRegisterSubmit} type="email" name="email"  id="email" />
                        </div>
                        <div className="ma0">
                          <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                          <input className="b pa2 input-reset ba w-100" onMouseEnter={onInputClick}  
                          onChange={onRegisterSubmit} type="password" name="password"  id="password" />
                        </div>
                     </div>                    
                    :
                      <div>
                        <div className="mt1">
                          <label className="db fw6 lh-copy f4" htmlFor="Username">Username</label>
                          <input className="pa2 input-reset ba w-100" 
                          onChange={onRegisterSubmit} 
                          type="text" name="username"  id="name" />
                        </div>
                        <div className="mt1">
                          <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                          <input className="pa2 input-reset ba w-100" 
                          onChange={onRegisterSubmit} 
                          type="email" name="email"  id="email" />
                        </div>
                        <div className="mt1">
                          <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                          <input className="b pa2 input-reset ba w-100"  
                          onChange={onRegisterSubmit}
                          type="password" name="password"  id="password" />
                        </div>
                      </div>
                  }
                </fieldset>
                <div>
                  <input onClick={() => onInsertUser({email,password,name})} 
                  className="db b ph3 pv2 input-reset b--dark-green bg-white 
                  grow pointer f3 hover-bg-black hover-white" 
                  type="submit" value="Register" />
                </div>
                <div className ="ma0"> 
                 <div className='center flex-wrap lh-solid'>
                    {
                      remove || !failed.length?
                      (<p className='dn'>{failed}</p>)
                      :
                      (<p className='ma0 f5 center b dark-red georgia shadow-5 pa2 ph3'>{failed}</p>)
                    }
                    <p className="f4 mt2" style={{marginBlockEnd:'0.5rem'}}>have an account?</p>
                    <p onClick={() => onRouteChange('signIn')} 
                    className="ma0 ml2 b dim pointer pa2 tc shadow-2 f4 bg-light-green ba">sign in</p>
                  </div>
                </div>
              </div>
            </article>
          </main>

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