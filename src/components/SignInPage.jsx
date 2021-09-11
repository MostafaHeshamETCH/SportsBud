import React, { PureComponent } from "react";

export class SignInPage extends PureComponent {
  render() {
    return (
      <div className='main-body bg-home'>
          <div class='signup-title'>
            SPORTSBUD
        </div>
        <div className='sub-title'>
            <div className='bodies'>
                Sign in
            </div>
            <div className='body1'>
                Please enter your login information
            </div>
        </div>
                <form className='phonenumber-field'>
                    <input className="phone-text-fields" id='id1'  type="text" placeholder=" Username" name="uname" required/>
                    <input className="phone-text-fields"  type="password" placeholder=" Password" name="psw" required/>
                </form>
                <div className='forgot'>
                    <a className='forgot-decoration' href=''>Forgot Password?</a>
                </div>
                <div className='forgot-f2'>
                    <button className='continue-button-field' id='id2'>
                        LET'S GO
                    </button>
                    <div className='last'>
                        Don't have an Account?
                        <a className='register' href=''> Create One</a>
                    </div>
                </div>
        </div>
    );
  }
}

export default SignInPage;
