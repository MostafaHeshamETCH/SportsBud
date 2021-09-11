import React from 'react';
class SignUp extends React.Component {
    render() { 
        return (
            <div class='main-body bg-home'>
                <div class='signup-title'>
                    SPORTSBUD
                </div>

                <div class='sub-title'>
                    <div class='bodies'>
                        Sign Up
                    </div>
                    <div class='body1'>
                       Welcome to SportsBud Family
                    </div>
                 </div>

                 <form class='phonenumber-field' id='divForm'>
                    <input class="phone-text-fields"  type="text" placeholder=" Full name" name="uname" required/>
                    <input class="phone-text-fields"  type="password" placeholder="Mobile Number" name="psw" required/>
                    <input class="phone-text-fields"  type="text" placeholder="Username" name="uname" required/>
                    <input class="phone-text-fields"  type="password" placeholder="Password" name="psw" required/>
                    <input class="phone-text-fields"  type="text" placeholder="Confirm Password" name="uname" required/>

                </form>
                <div class='forgot-f2'>
                    <button class='continue-button-field'>
                        LET'S GO
                    </button>
                </div>

            </div>
        );
    }
}
 
export default SignUp;