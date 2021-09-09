import React from "react";
import RoundedBtn from "./RoundedBtn";
import { Link } from "react-router-dom";
/*added link instead of anchor tag*/
function NavBarTwoBtns({ btnTxt }) {
  return (
    <div className="flex p-3 items-center flex-wrap flex-column justify-between flex-auto">
      <div>
        <Link to="/" className="text-white cursor-pointer logo-text">
          <span>SPORTSBUD</span>
        </Link>
      </div>
      <div className="text-gray-300">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
          <Link
            to="/"
            className="mr-5 hover:text-white text-xs cursor-pointer very-small-txt"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="mr-5 hover:text-white text-xs cursor-pointer very-small-txt"
          >
            ABOUT
          </Link>
          <Link
            to="/sports-choice"
            className="mr-5 hover:text-white text-xs cursor-pointer very-small-txt"
          >
            COURTS
          </Link>
        </nav>
      </div>
      <div>
        <button className="focus:outline-none hover:underline mr-3 text-white very-small-txt btn-margin-r">
          SIGN IN
        </button>
        <RoundedBtn
          txt={btnTxt}
          bgColor={"bg-gray-100 text-gray-900 hover:bg-gray-200 "}
        />
      </div>
    </div>
  );
}

export default NavBarTwoBtns;
