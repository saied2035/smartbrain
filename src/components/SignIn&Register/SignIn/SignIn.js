import React,{Component} from 'react';
import './css/SignIn.css'
  class SignIn extends Component  {
     componentDidUpdate() {
        // Typical usage (don't forget to compare props):
        const {onRouteChange,onSignInSubmit,getUserInformation,user,success} = this.props
        if ( success === 'success') {
          onSignInSubmit('reset')
          onRouteChange('home')
          getUserInformation(user)
        }
}
    render () {
      const {onSignInSubmit,onRouteChange,email,password,onInsertUser,failed} = this.props
    return (
          <main className="center background shadow-5 pa2 black-80" style={{width:'30vw',height:'auto'}} >
            <article className="mw5 center br3 pa2-ns mv3">
              <div className="center flex-wrap">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0 tc b">Sign In</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-green w-100" 
                    onChange={onSignInSubmit} type="email" name="email-address"  id="email-address" />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-light-green hover-green w-100" 
                    onChange={onSignInSubmit} type="password" name="password"  id="password" />
                  </div>
                </fieldset>
                <div>
                  <input onClick={() => {
                    onInsertUser(email,password)
                  }
                  }  
                  className="b ph3 pv2 input-reset ba b--dark-green bg-transparent 
                  grow pointer f3 hover-bg-black hover-light-green" 
                  type="submit" value="Sign in" />
                  </div>
                <div className="mt3">
                 {
                   failed == 'error' ?(<p>{error login,please try again}</p>)
                 } 
                 <div className='center flex-wrap lh-solid'>
                    <p className="f4 ma0">don't have an account?</p>
                    <p onClick={() => {
                      onSignInSubmit('reset')
                      onRouteChange('register')
                    }} 
                    className="b dib dim pointer ba pa2 tc shadow-2 f4 bg-light-green ba">Register</p>
                  </div>
                </div>
                </div>
            </article>
          </main>

    )
  }
  }

export default SignIn;

