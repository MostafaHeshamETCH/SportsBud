import React from "react";

function NavBar() {
  return (
    <div className="flex p-3 items-center flex-wrap flex-column justify-between mx-6 flex-auto">
      <div>
        <a href="/" className="text-white cursor-pointer logo-text">
          <span className=" text-sm">SPORTSBUD</span>
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
        <button className="focus:outline-none hover:underline mr-3 text-white very-small-txt">
          SIGN IN
        </button>
        <button className="bg-gray-100 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded-full text-gray-900 very-small-txt">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default NavBar;
