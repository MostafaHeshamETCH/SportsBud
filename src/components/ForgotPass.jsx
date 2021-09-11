import React from "react";
import { useHistory } from "react-router-dom";
import userWhite from "../assets/images/userWhite.png";

function ForgotPass() {
  let history = useHistory();
  const handleClick = () => {
    alert("An SMS will be sent within few minutes");
    history.push("/signin");
  };
  return (
    <div className="main-body bg-home">
      <div className=" signin-title">SPORTSBUD</div>

      <div className="sub-title">
        <div className="bodies">Forgot Password</div>
        <div className="body1">No Worries, just enter your phone number</div>

        <form className="phonenumber-field">
          <label class="relative focus-within:text-white block">
            <img
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
        </form>
      </div>

      <div class="forgot-f2">
        <button class="continue-button-field" onClick={handleClick}>
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default ForgotPass;
