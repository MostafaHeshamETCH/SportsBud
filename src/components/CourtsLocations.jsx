import React from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import locationBlack from "../assets/images/locationBlack.png";
import CourtsBar from "./CourtsBar";
import coinWhite from "../assets/images/coinWhite.png";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CourtsLocations() {
  //For Recieving title sent from the previous page
  const location = useLocation();
  let history = useHistory();
  const handleClick = () => {
    history.push("/current-bookings");
  };
  return (
    <div className="main">
      <div>
        <NavBarOneBtn btnTxt="BOOKINGS" clickMe={handleClick} />
      </div>
      <h2 className="courts-title">{location.state.title}</h2>
      <CourtsBar />
      <div className="wrapperr">
        {location.state.places.map((place, index) => {
          return (
            <div className="container2">
              <div className="flex-box2">
                <Card2 key={index} place={place} />
              </div>
              <img
                className="locationImgBlack"
                src={locationBlack}
                alt="location"
              />
              <h2 className="location_courts">{place.location}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card2(props) {
  const place = props.place;
  const handleClick = e => {
    // console.log("hi");
    e.preventDefault();
  };
  return (
    <div className="cardd" onClick={handleClick}>
      <h2 className="place_courts">{place.name}</h2>
      <h2 className="price_courts">
        {place.pricePerHour.toString() + " EGP/Hour"}
      </h2>
      <img className="coin-img" src={coinWhite} alt="coin icon" />
    </div>
  );
}
export default CourtsLocations;
