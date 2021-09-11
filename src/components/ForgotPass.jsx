import React from "react";
import { useHistory } from "react-router-dom";

function ForgotPass() {
  let history = useHistory();
  const handleClick = () => {
    alert("An SMS will be sent within few minutes");
    history.push("/signin");
  };
  return (
    <div className="main-body bg-home">
      <div className="fpass-title">SPORTSBUD</div>

      <div className="sub-title">
        <div className="bodies">Forgot Password</div>
        <div className="body1">No Worries, just enter your phone number</div>

        <form className="phonenumber-field">
          <input
            className="phone-text-fields"
            type="text"
            placeholder="Phone Number"
            name="uname"
            required
          />
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
