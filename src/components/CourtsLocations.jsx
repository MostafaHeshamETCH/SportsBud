import React, { PureComponent } from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import locationBlack from "../assets/images/locationBlack.png";
import CourtsBar from "./CourtsBar";
import coinWhite from "../assets/images/coinWhite.png";
function CourtsLocations() {
  const state = [
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
  ];
  return (
    <div className="main">
      <div>
        <NavBarOneBtn btnTxt="BOOKINGS" />
      </div>
      <h2 className="courts-title">Paddle Courts</h2>
      <CourtsBar />
      <div className="wrapper">
        {state.map((record, index) => {
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
      <img className="coin-img" src={coinWhite} />
    </div>
  );
}
export default CourtsLocations;
