import React, { PureComponent } from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import tennis from "../assets/images/tennis.png";
import football from "../assets/images/football.png";
import paddle from "../assets/images/paddle.png";
import squash from "../assets/images/squash.png";
import volley from "../assets/images/volley.png";
import handball from "../assets/images/handball.png";

function SportsTypeChoice() {
  const state = [
    { id: 1, title: "TENNIS", nocourts: "10 COURTS", img: tennis },
    { id: 2, title: "FOOTBALL", nocourts: "24 COURTS", img: football },
    { id: 3, title: "PADDLE", nocourts: "5 COURTS", img: paddle },
    { id: 4, title: "SQUASH", nocourts: "12 COURTS", img: squash },
    { id: 5, title: "VOLLEY", nocourts: "7 COURTS", img: volley },
    { id: 6, title: "HANDBALL", nocourts: "9 COURTS", img: handball },
  ];
  return (
    <div className="main">
      <div>
        <NavBarOneBtn btnTxt="BOOKINGS" />
      </div>
      <h2 className="choose-title">Please choose a type</h2>
      <div className="wrapper">
        {state.map((record) => {
          const { title, nocourts, img } = record;
          return (
            <div className="flex-box">
              <Card record={record} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card(props) {
  const { img, title, nocourts } = props.record;
  const handleClick = (e) => {
    console.log("hi");
    e.preventDefault();
  };
  return (
    <div className="card" onClick={handleClick}>
      <img className="imgg" src={img} />
      <div className="title">
        <h2 className="card__title">{title}</h2>
      </div>
      <div className="courts">
        <h2 className="card__courtno">{nocourts}</h2>
      </div>
    </div>
  );
}

export default SportsTypeChoice;
