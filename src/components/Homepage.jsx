import React from "react";
import fbLogo from "../assets/images/logo-facebook.png";
import igLogo from "../assets/images/logo-instagram.png";
import NavBarTwoBtns from "./NavBarTwoBtns";
import useWindowDimensions from "../components/useWindowDimensions";
import { useHistory } from "react-router-dom";

function Homepage() {
  const { height } = useWindowDimensions();

  const bgFullHeightStyle = {
    height: height,
  };

  let history = useHistory();
  const handleClick = () => {
    history.push("/signup");
  };

  return (
    <div className="bg-home font-all" style={bgFullHeightStyle}>
      <div className=" max-width-auto">
        <NavBarTwoBtns btnTxt="SIGN UP" clickMe={handleClick} />
        <div className="flex flex-col text-white homepage-main-txt screen-margin-all margin-top-big">
          <div className=" homepage-divs">Book a</div>
          <div className=" homepage-divs">sports court</div>
          <div className=" homepage-divs">in seconds</div>
          <div className=" margin-top"></div>
          <button
            onClick={() => history.push("/signin")}
            className=" rounded-full hover:bg-gray-200 bg-white text-gray-900 btn-padding homepage-main-cta-btn"
          >
            VIEW ALL
          </button>
          <div className="flex flex-row margin-top-big flex-grow">
            <div className="court-owner-txt">A Court-Owner?</div>
            <button
              // onClick={readData}
              className="focus:outline-none hover:underline pl-1 mr-3 text-white homepage-admin-create-btn"
            >
              Press here
            </button>
          </div>
          <div className="flex flex-row items-end justify-end homepage-social-media flex-grow">
            <a href="/">
              <img
                className="cursor-pointer social-icon mr-3"
                src={fbLogo}
                alt="Instagram Icon"
                height="auto"
              ></img>
            </a>
            <a href="/">
              <img
                className="cursor-pointer social-icon"
                src={igLogo}
                alt="Facebook Icon"
                height="auto"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
