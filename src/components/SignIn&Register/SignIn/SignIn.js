import React,{Component} from 'react';
import './css/SignIn.css'
  class SignIn extends Component  {
    render () {
      const {onInputClick,onSignInSubmit,onRouteChange,email,password,onInsertUser,failed,remove} = this.props
    return (
          <div className="center background shadow-5 w-33-ns w-60-m w-90">
              <div className="mt3">
                <fieldset id="sign_in" className="center ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0 tc b">Sign In</legend>  
                      <div>         
                          <div {...(failed.length? {className:"mt0"}: {className:"mt1"})}>
                          <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                          <input className="b pa2 ba w-100" onChange={onSignInSubmit} 
                           {...(failed.length? {onMouseEnter:onInputClick}: {})} 
                          type="email" name="email-address"  id="email-address" />
                          </div>
                          <div {...(failed.length? {className:"mt0"}: {className:"mt1"})}>
                          <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                          <input className="b pa2 ba w-100" onChange={onSignInSubmit} 
                          {...(failed.length? {onMouseEnter:onInputClick}: {})} 
                          type="password" name="password"  id="password" />
                          </div>
                      </div>                    
                </fieldset>
                <div>
                  <input onClick={() => onInsertUser({email,password})} className="center b ph3 pv2
                       b--dark-green bg-white grow pointer f3 hover-bg-black hover-white" type="submit" 
                       value="Sign in" />
                  </div>
                <div className="mt3">                    
                    {
                      remove ?
                      (<p className='dn'>{failed}</p>)
                      :
                      (<p className='ma0 f5 tc b dark-red georgia shadow-5 pa2 ph3'>{failed}</p>)
                    }
                    <p className="tc f4 mt4 ma0" style={{marginBlockEnd:'0.5rem'}}>don't have an account?</p>
                    <input onClick={() => {
                        onSignInSubmit('reset')
                        onRouteChange('register')
                    }} 
                    type="button" value="register" className="center mw4 ma0 b dim pointer pa2 shadow-2 
                     f4 bg-light-green ba" style={{marginBlockEnd:'3rem'}}/>
                </div>
                </div>
          </div>

    )
  }
  }

export default SignIn;

