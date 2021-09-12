import React, { useState, useEffect } from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import tennis from "../assets/images/tennis.png";
import football from "../assets/images/football.png";
import paddle from "../assets/images/paddle.png";
import squash from "../assets/images/squash.png";
import volley from "../assets/images/volley.png";
import handball from "../assets/images/handball.png";
import { useHistory } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

class Place {
  constructor(name, type, pricePerHour, location, courts, courtsNo) {
    this.name = name;
    this.type = type;
    this.pricePerHour = pricePerHour;
    this.location = location;
    this.courts = courts;
    this.courtsNo = courtsNo;
  }
}

class Court {
  constructor(ID, availableHours) {
    this.ID = ID;
    this.availableHours = availableHours;
  }
}

class Slot {
  constructor(slotTime, isAvailable) {
    this.slotTime = slotTime;
    this.isAvailable = isAvailable;
  }
}

function SportsTypeChoice() {
  const [myArray2, updateMyArray] = useState([
    { id: 1, title: "TENNIS", nocourts: "10 COURTS", img: tennis },
    { id: 2, title: "FOOTBALL", nocourts: "24 COURTS", img: football },
    { id: 3, title: "PADDLE", nocourts: "5 COURTS", img: paddle },
    { id: 4, title: "SQUASH", nocourts: "12 COURTS", img: squash },
    { id: 5, title: "VOLLEY", nocourts: "7 COURTS", img: volley },
    { id: 6, title: "HANDBALL", nocourts: "9 COURTS", img: handball }
  ]);
  let history = useHistory();

  const bookingBtnClick = () => {
    history.push("/current-bookings");
  };

  return (
    <div className="main">
      <NavBarOneBtn btnTxt="BOOKINGS" clickMe={bookingBtnClick} />
      <h2 className="choose-title">Please choose a type</h2>
      <div className="wrapperr">
        {myArray2.map(record => {
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
  const [places, setPlaces] = useState([]);

  const writeData = async () => {
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, "Places"), {
        name: "Peps Paddle",
        type: "Paddle",
        price_per_hour: 920.0,
        location: "Fe Alby",
        courts: [
          {
            id: 1,
            available_hours: [
              {
                slot_time: "8:00 AM to 9:00 AM",
                is_available: true
              },
              {
                slot_time: "10:00 AM to 11:00 AM",
                is_available: false
              },
              {
                slot_time: "6:00 PM to 7:00 PM",
                is_available: true
              }
            ]
          },
          {
            id: 1,
            available_hours: [
              {
                slot_time: "8:00 AM to 9:00 AM",
                is_available: true
              },
              {
                slot_time: "10:00 AM to 11:00 AM",
                is_available: false
              },
              {
                slot_time: "6:00 PM to 7:00 PM",
                is_available: true
              }
            ]
          },
          {
            id: 1,
            available_hours: [
              {
                slot_time: "8:00 AM to 9:00 AM",
                is_available: true
              },
              {
                slot_time: "10:00 AM to 11:00 AM",
                is_available: false
              },
              {
                slot_time: "6:00 PM to 7:00 PM",
                is_available: true
              }
            ]
          }
        ],
        courts_num: 3
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // useEffect(() => readData(), []);

  const readData = async () => {
    const placesArray = [];
    const db = getFirestore();
    const placesIns = await getDocs(collection(db, "Places"));
    placesIns.forEach(doc => {
      const data = doc.data();
      const courts = [];
      data.courts.forEach(court => {
        const slots = [];
        court.available_hours.forEach(ah => {
          slots.push(new Slot(ah.slot_time, ah.isAvailable));
        });
        courts.push(new Court(court.id, slots));
      });
      const place = new Place(
        data.name,
        data.type,
        data.price_per_hour,
        data.location,
        courts,
        data.courts_num
      );
      placesArray.push(place);
    });
    return placesArray;
  };

  let history = useHistory();
  const { img, title, nocourts } = props.record;

  //Rendering Courts locations page and pass the title
  const handleClick = async e => {
    const placesArray = await readData();

    if (title === "PADDLE") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Paddle Courts",
          places: placesArray
        }
      });
    }
    if (title === "FOOTBALL") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Paddle Courts",
          places: placesArray
        }
      });
    }
    if (title === "VOLLEYBALL") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Paddle Courts",
          places: placesArray
        }
      });
    }
    if (title === "TENNIS") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Paddle Courts",
          places: placesArray
        }
      });
    }
    if (title === "SQUASH") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Paddle Courts",
          places: placesArray
        }
      });
    }
    if (title === "HANDBALL") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Paddle Courts",
          places: placesArray
        }
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
