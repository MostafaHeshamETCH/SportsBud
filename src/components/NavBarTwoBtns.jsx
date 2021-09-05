import React from "react";
import RoundedBtn from "./RoundedBtn";

function NavBarTwoBtns({ btnTxt }) {
  return (
    <div className="flex p-3 items-center flex-wrap flex-column justify-between flex-auto">
      <div>
        <a href="/" className="text-white cursor-pointer logo-text">
          <span>SPORTSBUD</span>
        </a>
      </div>
      <div className="text-gray-300">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
          <a
            href="/"
            className="mr-5 hover:text-white text-xs cursor-pointer very-small-txt"
          >
            HOME
          </a>
          <a
            href="/about"
            className="mr-5 hover:text-white text-xs cursor-pointer very-small-txt"
          >
            ABOUT
          </a>
          <a
            href="/courts"
            className="mr-5 hover:text-white text-xs cursor-pointer very-small-txt"
          >
            COURTS
          </a>
        </nav>
      </div>
      <div>
        <button className="focus:outline-none hover:underline mr-3 text-white very-small-txt btn-margin-r">
          SIGN IN
        </button>
        <RoundedBtn txt={btnTxt} bgColor={"bg-gray-100 text-gray-900 "} />
      </div>
    </div>
  );
}

export default NavBarTwoBtns;
