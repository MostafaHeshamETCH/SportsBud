import React, { useState } from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import tennis from "../assets/images/tennis.png";
import football from "../assets/images/football.png";
import paddle from "../assets/images/paddle.png";
import squash from "../assets/images/squash.png";
import volley from "../assets/images/volley.png";
import handball from "../assets/images/handball.png";
import { useHistory } from "react-router-dom";

function SportsTypeChoice() {
  const [myArray2, updateMyArray] = useState([
    { id: 1, title: "TENNIS", nocourts: "10 COURTS", img: tennis },
    { id: 2, title: "FOOTBALL", nocourts: "24 COURTS", img: football },
    { id: 3, title: "PADDLE", nocourts: "5 COURTS", img: paddle },
    { id: 4, title: "SQUASH", nocourts: "12 COURTS", img: squash },
    { id: 5, title: "VOLLEY", nocourts: "7 COURTS", img: volley },
    { id: 6, title: "HANDBALL", nocourts: "9 COURTS", img: handball },
  ]);
  let history = useHistory();
  const handleClick = () => {
    history.push("/current-bookings");
  };
  return (
    <div className="main">
      <NavBarOneBtn btnTxt="BOOKINGS" clickMe={handleClick} />
      <h2 className="choose-title">Please choose a type</h2>
      <div className="wrapperr">
        {myArray2.map((record) => {
          return (
            <div className="flex-boxx">
              <Card record={record} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card(props) {
  let history = useHistory();
  const { img, title, nocourts } = props.record;

  //Rendering Courts locations page and pass the title
  const handleClick = (e) => {
    if (title === "PADDLE") {
      history.push({
        pathname: "/courts-locations",
        state: "Paddle Courts",
      });
    }
    if (title === "FOOTBALL") {
      history.push({
        pathname: "/courts-locations",
        state: "Football Courts",
      });
    }
    if (title === "VOLLEYBALL") {
      history.push({
        pathname: "/courts-locations",
        state: "Volleyball Courts",
      });
    }
    if (title === "TENNIS") {
      history.push({
        pathname: "/courts-locations",
        state: "Tennis Courts",
      });
    }
    if (title === "SQUASH") {
      history.push({
        pathname: "/courts-locations",
        state: "Squash Courts",
      });
    }
    if (title === "HANDBALL") {
      history.push({
        pathname: "/courts-locations",
        state: "Handball Courts",
      });
    }
  };

  return (
    <div className="cardd" onClick={handleClick}>
      <img className="imgg" src={img} alt="Sports-img" />
      <div className="titlee">
        <h2 className="card__title">{title}</h2>
      </div>
      <div className="courts">
        <h2 className="card__courtno">{nocourts}</h2>
      </div>
    </div>
  );
}

export default SportsTypeChoice;
