import React from 'react';
class ForgotPass extends React.Component {
    render() { 
        return (
            <div className='main-body'>
                <div className='fpass-title'>
                    SPORTSBUD
                </div>

                <div className='sub-title'>
                    <div className='bodies'>
                        Forgot Password
                    </div>
                    <div className='body1'>
                       No Worries, just enter your phone number
                    </div>

                    <form className='phonenumber-field'>
                    <input className="phone-text-fields"  type="text" placeholder="Phone Number" name="uname" required/>
                </form>
                 </div>

                 <div class='forgot-f2'>
                    <button class='continue-button-field'>
                        CONTINUE
                    </button>
                </div>
            </div>
        );
    }
}
 
export default ForgotPass;