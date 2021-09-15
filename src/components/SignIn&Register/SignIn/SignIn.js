import React,{Component} from 'react';
import './css/SignIn.css'
  class SignIn extends Component  {
    render () {
      const {onInputClick,onSignInSubmit,onRouteChange,email,password,onInsertUser,failed,remove} = this.props
    return (
          <main className="center background shadow-5 pa2 black-80" style={{width:'34vw',height:'85vh'}} >
            <article className="mw5 center br3 pa2-ns mv3">
              <div className="center flex-wrap">
                <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0 tc b">Sign In</legend>
                  {   
                    failed.length ?  
                      <div>         
                          <div className="mt0">
                          <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                          <input className="pa2 input-reset ba w-100" 
                          onChange={onSignInSubmit} onMouseEnter={onInputClick} 
                          type="email" name="email-address"  id="email-address" />
                          </div>
                          <div className="mt0">
                          <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                          <input className="b pa2 input-reset ba w-100" 
                          onChange={onSignInSubmit} onMouseEnter={onInputClick} 
                          type="password" name="password"  id="password" />
                          </div>
                      </div>
                     : 
                      <div>         
                          <div className="mt1">
                          <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                          <input className="pa2 input-reset ba w-100" 
                          onChange={onSignInSubmit} type="email" name="email-address"  id="email-address" />
                          </div>
                          <div className="mt1">
                          <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                          <input className="b pa2 input-reset ba w-100" 
                          onChange={onSignInSubmit} type="password" name="password"  id="password" />
                          </div>
                      </div>                      
                  }
                </fieldset>
                <div>
                  <input onClick={() => {
                    onInsertUser({email,password})
                  }
                  }  
                  className="db b ph3 pv2 input-reset b--dark-green bg-white 
                  grow pointer f3 hover-bg-black hover-white" 
                  type="submit" value="Sign in" />
                  </div>
                <div className="mt3">                    
                 <div className='center flex-wrap lh-solid'>
                    {
                      remove ?
                      (<p className='dn'>{failed}</p>)
                      :
                      (<p className='ma0 f5 center b dark-red georgia shadow-5 pa2 ph3'>{failed}</p>)
                    }
                    <p className="f4 mt2" style={{marginBlockEnd:'0.5rem'}}>don't have an account?</p>
                    <p onClick={() => {
                        onSignInSubmit('reset')
                        onRouteChange('register')
                    }} 
                    className="ma0 b dim pointer pa2 tc shadow-2 f4 bg-light-green ba">Register</p>
                  </div>
                </div>
                </div>
            </article>
          </main>

    )
  }
  }

export default SignIn;

