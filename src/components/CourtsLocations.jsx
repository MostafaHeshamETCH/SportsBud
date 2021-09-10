import React from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import locationBlack from "../assets/images/locationBlack.png";
import CourtsBar from "./CourtsBar";
import coinWhite from "../assets/images/coinWhite.png";
import { useLocation } from "react-router-dom";

function CourtsLocations() {
  const { useState } = React;
  const [myArray] = useState([
    {
      id: 1,
      place: "SKY PADDLE",
      price: "320 EGP/Hour",
      location: "New Cairo",
    },
    {
      id: 2,
      place: "ZOHOUR CLUB",
      price: "260 EGP/Hour",
      location: "New Cairo",
    },
    { id: 3, place: "GO PADDLE", price: "260 EGP/Hour", location: "MAADI" },
    {
      id: 4,
      place: "HELLO PADDLE",
      price: "260 EGP/Hour",
      location: "Nasr City",
    },
    { id: 5, place: "SUPER PADDLE", price: "260 EGP/Hour", location: "REHAB" },
    {
      id: 6,
      place: "HY^2O PADDLE",
      price: "260 EGP/Hour",
      location: "Zayed City",
    },
  ]);
  //For Recieving title sent from the previous page
  const location = useLocation();

  return (
    <div className="main">
      <div>
        <NavBarOneBtn btnTxt="BOOKINGS" />
      </div>
      <h2 className="courts-title">{location.state}</h2>
      <CourtsBar />
      <div className="wrapper">
        {myArray.map((record, index) => {
          return (
            <div className="container2">
              <div className="flex-box2">
                <Card2 key={index} record={record} />
              </div>
              <img
                className="locationImgBlack"
                src={locationBlack}
                alt="location"
              />
              <h2 className="location_courts">{record.location}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card2(props) {
  const { place, price } = props.record;
  const handleClick = (e) => {
    console.log("hi");
    e.preventDefault();
  };
  return (
    <div className="card" onClick={handleClick}>
      <h2 className="place_courts">{place}</h2>
      <h2 className="price_courts">{price}</h2>
      <img className="coin-img" src={coinWhite} alt="coin icon" />
    </div>
  );
}
export default CourtsLocations;
