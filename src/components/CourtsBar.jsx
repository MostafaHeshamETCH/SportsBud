import React from "react";
import peopleBlack from "../assets/images/peopleBlack.png";
import clockBlack from "../assets/images/clockBlack.png";
import calendarBlack from "../assets/images/calenderBlack.png";
function CourtsBar() {
  return (
    <div className="border-nav ml-16 ">
      <div className="flex p-3 items-center flex-wrap flex-column justify-between flex-auto screen-margin-all border-2 border-black rounded-2xl divide-x divide-gray-900 divide-opacity-100 w-11/12">
        <div>
          <img className="calender" src={calendarBlack} />
          <a
            href="/"
            className="text-gray900 cursor-pointer m-20 font-Montserrat text-3xl"
          >
            <span>Booking Date</span>
          </a>
        </div>
        <div>
          <img className="slots-img" src={clockBlack} />
          <a
            href="/"
            className="text-gray900 cursor-pointer m-28 ml-36 font-Montserrat text-3xl"
          >
            <span>Slots Needed</span>
          </a>
        </div>
        <div>
          <img className="players-no-img" src={peopleBlack} />
          <a
            href="/"
            className="text-gray900 cursor-pointer font-Montserrat text-3xl m-24 ml-20"
          >
            <span># of Players</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourtsBar;
