import React, { useState } from "react";
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
  constructor(name, type, pricePerHour, location, courts, courts_num) {
    this.name = name;
    this.type = type;
    this.pricePerHour = pricePerHour;
    this.location = location;
    this.courts = courts;
    this.courts_num = courts_num;
  }
}

class DaysAndAvailableHours {
  constructor(date, availableHours) {
    this.date = date;
    this.availableHours = availableHours;
  }
}

class Court {
  constructor(ID, daysAndAvailableHours) {
    this.ID = ID;
    this.daysAndAvailableHours = daysAndAvailableHours;
  }
}

class Slot {
  constructor(slotTime, isAvailable) {
    this.slotTime = slotTime;
    this.isAvailable = isAvailable;
  }
}

function SportsTypeChoice() {
  const [myArray2] = useState([
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
    <div className="main font-all max-width-auto">
      <NavBarOneBtn btnTxt="BOOKINGS" clickMe={bookingBtnClick} />
      <h2 className="choose-title">Please choose a type</h2>
      <div className="wrapperr">
        {myArray2.map(record => {
          return (
            <div key={record.id} className="flex-boxx">
              <Card record={record} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card(props) {
  const all_available_times = [
    {
      slot_time: "8:00 AM to 9:00 AM",
      is_available: true
    },
    {
      slot_time: "9:00 AM to 10:00 AM",
      is_available: true
    },
    {
      slot_time: "10:00 AM to 11:00 AM",
      is_available: true
    },
    {
      slot_time: "11:00 AM to 12:00 PM",
      is_available: true
    },
    {
      slot_time: "12:00 PM to 1:00 PM",
      is_available: true
    },
    {
      slot_time: "1:00 PM to 2:00 PM",
      is_available: true
    },
    {
      slot_time: "2:00 PM to 3:00 PM",
      is_available: true
    },
    {
      slot_time: "3:00 PM to 4:00 PM",
      is_available: true
    },
    {
      slot_time: "4:00 PM to 5:00 PM",
      is_available: true
    },
    {
      slot_time: "5:00 PM to 6:00 PM",
      is_available: true
    },
    {
      slot_time: "6:00 PM to 7:00 PM",
      is_available: true
    },
    {
      slot_time: "7:00 PM to 8:00 PM",
      is_available: true
    },
    {
      slot_time: "8:00 PM to 9:00 PM",
      is_available: true
    },
    {
      slot_time: "9:00 PM to 10:00 PM",
      is_available: true
    },
    {
      slot_time: "10:00 PM to 11:00 PM",
      is_available: true
    },
    {
      slot_time: "11:00 PM to 12:00 AM",
      is_available: true
    },
    {
      slot_time: "12:00 AM to 1:00 AM",
      is_available: true
    },
    {
      slot_time: "1:00 AM to 2:00 AM",
      is_available: true
    }
  ];
  const all_days_and_times = [
    { date: "12 / 9 / 2021", available_hours: all_available_times },
    { date: "13 / 9 / 2021", available_hours: all_available_times },
    { date: "14 / 9 / 2021", available_hours: all_available_times },
    { date: "15 / 9 / 2021", available_hours: all_available_times },
    { date: "16 / 9 / 2021", available_hours: all_available_times },
    { date: "17 / 9 / 2021", available_hours: all_available_times },
    { date: "18 / 9 / 2021", available_hours: all_available_times },
    { date: "19 / 9 / 2021", available_hours: all_available_times },
    { date: "20 / 9 / 2021", available_hours: all_available_times },
    { date: "21 / 9 / 2021", available_hours: all_available_times },
    { date: "22 / 9 / 2021", available_hours: all_available_times },
    { date: "23 / 9 / 2021", available_hours: all_available_times },
    { date: "24 / 9 / 2021", available_hours: all_available_times },
    { date: "25 / 9 / 2021", available_hours: all_available_times },
    { date: "26 / 9 / 2021", available_hours: all_available_times },
    { date: "27 / 9 / 2021", available_hours: all_available_times },
    { date: "28 / 9 / 2021", available_hours: all_available_times }
  ];

  const writeData = async () => {
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, "Places"), {
        name: "FERDOUS",
        type: "Football",
        price_per_hour: 150.0,
        location: "Nasr City",
        courts: [
          {
            id: 1,
            daysAndAvailableHours: all_days_and_times
          },
          {
            id: 2,
            daysAndAvailableHours: all_days_and_times
          },
          {
            id: 3,
            daysAndAvailableHours: all_days_and_times
          }
        ],
        courts_num: 3
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "Places"), {
        name: "WAFAA AND AMAL",
        type: "Football",
        price_per_hour: 100.0,
        location: "Nasr City",
        courts: [
          {
            id: 1,
            daysAndAvailableHours: all_days_and_times
          },
          {
            id: 2,
            daysAndAvailableHours: all_days_and_times
          }
        ],
        courts_num: 2
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "Places"), {
        name: "GALAA",
        type: "Volley",
        price_per_hour: 130.0,
        location: "Nasr City",
        courts: [
          {
            id: 1,
            daysAndAvailableHours: all_days_and_times
          }
        ],
        courts_num: 1
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "Places"), {
        name: "HELIOPOLIS",
        type: "Handball",
        price_per_hour: 130.0,
        location: "Heliopolis",
        courts: [
          {
            id: 1,
            daysAndAvailableHours: all_days_and_times
          }
        ],
        courts_num: 1
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "Places"), {
        name: "EL ZOHOUR",
        type: "Tennis",
        price_per_hour: 180.0,
        location: "Nasr City",
        courts: [
          {
            id: 1,
            daysAndAvailableHours: all_days_and_times
          }
        ],
        courts_num: 1
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "Places"), {
        name: "EL SHAMS CLUB",
        type: "Squash",
        price_per_hour: 15.0,
        location: "New Egypt",
        courts: [
          {
            id: 1,
            daysAndAvailableHours: all_days_and_times
          }
        ],
        courts_num: 1
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
        const datesAndSlots = [];
        court.daysAndAvailableHours.forEach(da => {
          const slots = [];
          da.available_hours.forEach(ah => {
            slots.push(new Slot(ah.slot_time, ah.is_available));
          });
          datesAndSlots.push(new DaysAndAvailableHours(da.date, slots));
        });
        courts.push(new Court(court.id, datesAndSlots));
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
    // writeData();

    if (title === "PADDLE") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Paddle Courts",
          places: placesArray.filter(place => place.type === "Paddle")
        }
      });
    }
    if (title === "FOOTBALL") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Football Courts",
          places: placesArray.filter(place => place.type === "Football")
        }
      });
    }
    if (title === "VOLLEY") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Volley Courts",
          places: placesArray.filter(place => place.type === "Volley")
        }
      });
    }
    if (title === "TENNIS") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Tennis Courts",
          places: placesArray.filter(place => place.type === "Tennis")
        }
      });
    }
    if (title === "SQUASH") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Squash Courts",
          places: placesArray.filter(place => place.type === "Squash")
        }
      });
    }
    if (title === "HANDBALL") {
      history.push({
        pathname: "/courts-locations",
        state: {
          title: "Handball Courts",
          places: placesArray.filter(place => place.type === "Handball")
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
