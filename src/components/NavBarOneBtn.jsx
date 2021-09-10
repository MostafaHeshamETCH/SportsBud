import React from "react";
import { Link } from "react-router-dom";
import RoundedBtn from "./RoundedBtn";
/*added link instead of anchor tag*/
function NavBarOneBtn({ btnTxt, clickMe }) {
  return (
    <div className="flex p-3 items-center flex-wrap flex-column justify-between flex-auto screen-margin-all">
      <div>
        <Link to="/" className="text-gray900 cursor-pointer logo-text">
          <span>SPORTSBUD</span>
        </Link>
      </div>
      <div className="text-gray-900">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
          <Link
            to="/"
            className="mr-5 hover:text-gray300 text-xs cursor-pointer very-small-txt"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="mr-5 hover:text-gray300 text-xs cursor-pointer very-small-txt"
          >
            ABOUT
          </Link>
          <Link
            to="/sports-choice"
            className="mr-5 hover:text-gray300 text-xs cursor-pointer very-small-txt"
          >
            COURTS
          </Link>
        </nav>
      </div>
      <div>
        <RoundedBtn
          onClick={clickMe}
          txt={btnTxt}
          bgColor={"bg-gray-900 text-white hover:bg-gray-700"}
        />
      </div>
    </div>
  );
}

export default NavBarOneBtn;
