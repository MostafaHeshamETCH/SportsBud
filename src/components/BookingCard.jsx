import React from "react";
import ClockImg from "../assets/images/clock.png";
import LocationImg from "../assets/images/location.png";

function BookingCard(props) {
  const location = props.location;
  return (
    <div className="bookingContainer font-all">
      <div className="bookingName">
        <p></p>
      </div>
      <div className="courtNumber">
        <p>COURT 1</p>
      </div>
      <div className="location">
        <img className="locationImg" src={LocationImg} alt="location" />
        <div className="locationName">{location}</div>
      </div>
      <div className="price">
        <p>650.0 EGP</p>
      </div>
      <div className="time">
        <img className="clockImg" src={ClockImg} alt="clock" />
        <p>8:00 AM - 10:00 AM</p>
      </div>
    </div>
  );
}
export default BookingCard;
