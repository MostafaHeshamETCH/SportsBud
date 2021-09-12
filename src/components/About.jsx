import React from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import { useLocation } from "react-router-dom";
function About() {
  const location = useLocation();

  return (
    <div className="main font-all max-width-auto">
      <div>
        <NavBarOneBtn btnTxt="BOOKINGS" />
      </div>
      {location.state.DayAndTime.map((times) => {
        console.log(times.id);
      })}
    </div>
  );
}

export default About;
