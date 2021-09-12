import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import userWhite from "../assets/images/userWhite.png";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  let history = useHistory();

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const {
        // fullname,
        // mobile,
        email,
        password
        // confirmpassword
      } = event.target.elements;
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        history.push("/signin");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div class="main-body bg-home">
      <div className=" max-width-auto">
        <a href="/" className="signup-title">
          SPORTSBUD
        </a>

        <div class="sub-title">
          <div class="bodies">Sign Up</div>
          <div class="body1">Welcome to SportsBud Family</div>
        </div>

        <form class="phonenumber-field" id="divForm" onSubmit={handleSignUp}>
          <label class="relative focus-within:text-white block">
            <img
              alt="user icon"
              src={userWhite}
              className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4"
            />
            <input
              type="fullname"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              class="form-input text-white fields-color py-3 px-4 placeholder-white appearance-none w-full block pl-14 focus:outline-none rounded-full field-width"
            />
          </label>
          <label class="relative focus-within:text-white block">
            <img
              alt="user icon"
              src={userWhite}
              className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4"
            />
            <input
              type="mobile"
              name="mobile"
              id="mobile"
              placeholder="Mobile Number"
              class="form-input text-white fields-color py-3 px-4 placeholder-white appearance-none w-full block pl-14 focus:outline-none rounded-full field-width"
            />
          </label>
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
              class="form-input text-white fields-color py-3 px-4 placeholder-white appearance-none w-full block pl-14 focus:outline-none rounded-full field-width"
            />
          </label>
          <label class="relative focus-within:text-white block">
            <img
              alt="user icon"
              src={userWhite}
              className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="form-input text-white fields-color py-3 px-4 placeholder-white appearance-none w-full block pl-14 focus:outline-none rounded-full field-width"
            />
          </label>
          <label class="relative focus-within:text-white block">
            <img
              alt="user icon"
              src={userWhite}
              className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4"
            />
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
              class="form-input text-white fields-color py-3 px-4 placeholder-white appearance-none w-full block pl-14 focus:outline-none rounded-full field-width"
            />
          </label>
          <div class="forgot-f2">
            <button class="continue-button-field" type="submit">
              LET'S GO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
