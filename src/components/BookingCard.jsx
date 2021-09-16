import React from "react";
import ClockImg from "../assets/images/clock.png";
import LocationImg from "../assets/images/location.png";

function BookingCard(props) {
  return (
    <div className="bookingContainer font-all">
      <div className="bookingName">
        <p>{props.placeName}</p>
      </div>
      <div className="courtNumber">
        <p>{props.courtName}</p>
      </div>
      <div className="location">
        <img className="locationImg" src={LocationImg} alt="location" />
        <div className="locationName">{props.location}</div>
      </div>
      <div className="price">
        <p>{props.totalAmount}.0 EGP</p>
      </div>
      <div className="time">
        <img className="clockImg" src={ClockImg} alt="clock" />
        <p>{props.slot.slotTime}</p>
      </div>
    </div>
  );
}
export default BookingCard;
