import React from "react";
import peopleBlack from "../assets/images/peopleBlack.png";
import clockBlack from "../assets/images/clockBlack.png";
import calendarBlack from "../assets/images/calenderBlack.png";
import dividerBlack from "../assets/images/dividerBlack.png";

function CourtsBar() {
  return (
    // <div className="border-nav ml-8 ">
    //   <div className="flex p-3 items-center flex-wrap flex-column justify-between flex-auto screen-margin-all border-2 border-black rounded-2xl divide-x divide-gray-900 divide-opacity-100 w-11/12">
    //     <div>
    //       <img className="calender" src={calendarBlack} />
    //       <a
    //         href="/"
    //         className="text-gray900 cursor-pointer m-20 font-Montserrat text-3xl"
    //       >
    //         <span>Booking Date</span>
    //       </a>
    //     </div>
    //     <div>
    //       <img className="slots-img" src={clockBlack} />
    //       <a
    //         href="/"
    //         className="text-gray900 cursor-pointer m-28 ml-36 font-Montserrat text-3xl"
    //       >
    //         <span>Slots Needed</span>
    //       </a>
    //     </div>
    //     <div>
    //       <img className="players-no-img" src={peopleBlack} />
    //       <a
    //         href="/"
    //         className="text-gray900 cursor-pointer font-Montserrat text-3xl m-24 ml-24"
    //       >
    //         <span># of Players</span>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="options-bar-container font-all">
        <div>
          <a className="options-bar-item">
            <img
              height="32"
              width="32"
              src={calendarBlack}
              alt="calender icon"
            />
            <div className="item-text">Booking Date</div>
          </a>
        </div>
        <img height="32" width="64" src={dividerBlack} alt="divider icon" />
        <div>
          <a className="options-bar-item">
            <img height="32" width="32" src={clockBlack} alt="clock icon" />
            <div className="item-text">Slots Needed</div>
          </a>
        </div>
        <img height="32" width="64" src={dividerBlack} alt="divider icon" />
        <div>
          <a className="options-bar-item">
            <img height="32" width="32" src={peopleBlack} alt="people icon" />
            <div className="item-text"># of Players</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default CourtsBar;
