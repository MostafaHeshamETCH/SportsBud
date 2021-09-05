import React, { PureComponent } from "react";
import NavBarOneBtn from "./NavBarOneBtn";

export class SportsTypeChoice extends PureComponent {
  render() {
    return (
      <div>
        <NavBarOneBtn btnTxt="BOOKINGS" />
      </div>
    );
  }
}

export default SportsTypeChoice;
