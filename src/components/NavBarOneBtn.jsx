import React from "react";
import RoundedBtn from "./RoundedBtn";

function NavBarOneBtn({ btnTxt }) {
  return (
    <div className="flex p-3 items-center flex-wrap flex-column justify-between flex-auto screen-margin-all">
      <div>
        <a href="/" className="text-gray900 cursor-pointer logo-text">
          <span className=" text-sm">SPORTSBUD</span>
        </a>
      </div>
      <div className="text-gray-900">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
          <a
            href="/"
            className="mr-5 hover:text-gray300 text-xs cursor-pointer very-small-txt"
          >
            HOME
          </a>
          <a
            href="/about"
            className="mr-5 hover:text-gray300 text-xs cursor-pointer very-small-txt"
          >
            ABOUT
          </a>
          <a
            href="/courts"
            className="mr-5 hover:text-gray300 text-xs cursor-pointer very-small-txt"
          >
            COURTS
          </a>
        </nav>
      </div>
      <div>
        <RoundedBtn txt={btnTxt} bgColor={"bg-gray-900 text-white "} />
      </div>
    </div>
  );
}

export default NavBarOneBtn;
