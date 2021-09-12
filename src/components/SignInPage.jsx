import React, { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import userWhite from "../assets/images/userWhite.png";
import lockWhite from "../assets/images/lockWhite.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Auth";

function SignInPage() {
  let history = useHistory();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value);
        history.push("/sports-choice");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/sports-choice" />;
  }

  return (
    <div className="main-body bg-home">
      <div className=" max-width-auto">
        <a href="/" class="signin-title">
          SPORTSBUD
        </a>
        <div className="sub-title">
          <div className="bodies">Sign in</div>
          <div className="body1">Please enter your login information</div>
        </div>
        <form className="phonenumber-field" onSubmit={handleLogin}>
          <label class="relative focus-within:text-white block">
            <img
              alt="user icon"
              src={userWhite}
              className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="form-input text-white fields-color py-3 px-4 placeholder-gray-100 appearance-none w-full block pl-14 focus:outline-none rounded-full field-width"
            />
          </label>
          <div className="fields-sized-box"></div>
          <label class="relative focus-within:text-white block ">
            <img
              alt="user icon"
              src={lockWhite}
              className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="form-input fields-color text-white py-3 px-4 placeholder-gray-100 appearance-none w-full block pl-14 focus:outline-none rounded-full field-width"
            />
          </label>
          <div className="forgot">
            <a className="forgot-decoration" href="forgot-password">
              Forgot Password?
            </a>
          </div>

          <div className="forgot-f2">
            <button type="submit" className="continue-button-field" id="id2">
              LET'S GO
            </button>
            <div className="last">
              Don't have an Account?
              <a className="register" href="/signup">
                {" "}
                &nbsp;Create One
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(SignInPage);
