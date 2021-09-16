import React, { useState, useContext } from "react";
import NavBarOneBtn from "./NavBarOneBtn";
import locationBlack from "../assets/images/locationBlack.png";
import CourtsBar from "./CourtsBar";
import coinWhite from "../assets/images/coinWhite.png";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { AuthContext } from "../Auth";

class Booking {
  constructor(place_name, court_name, location, slots, total_amount, email) {
    this.place_name = place_name;
    this.court_name = court_name;
    this.location = location;
    this.slots = slots;
    this.total_amount = total_amount;
    this.email = email;
  }
}

function CourtsLocations() {
  //For Recieving title sent from the previous page
  const location = useLocation();
  const [date, setDate] = useState(new Date()); //sk
  let history = useHistory();

  const { currentUser } = useContext(AuthContext);

  const readData = async () => {
    var bookingsT = [];
    const db = getFirestore();
    const bookingsIns = await getDocs(collection(db, "Bookings"));

    bookingsIns.forEach(doc => {
      const data = doc.data();
      const booking = new Booking(
        data.place_name,
        data.court_name,
        data.location,
        data.slots,
        data.total_amount,
        data.email
      );
      bookingsT.push(booking);
    });

    bookingsT = bookingsT.filter(
      booking => booking.email === currentUser.email
    );
    return bookingsT;
  };

  const handleClick = async () => {
    const bookings = await readData();
    const bookingsF = [];
    bookings.map(booking => {
      booking.slots.forEach(slot => {
        bookingsF.push(
          new Booking(
            booking.place_name,
            booking.court_name,
            booking.location,
            slot,
            booking.total_amount,
            booking.email
          )
        );
      });
    });
    console.log(bookingsF);
    history.push({
      pathname: "/current-bookings",
      state: {
        bookings: bookingsF
      }
    });
  };
  return (
    <div className="main font-all max-width-auto">
      <div>
        <NavBarOneBtn btnTxt="BOOKINGS" clickMe={handleClick} />
      </div>
      <h2 className="courts-title">{location.state.title}</h2>
      <CourtsBar date={date} setDate={setDate} />
      <div className="wrapperr">
        {location.state.places.map((place, index) => {
          return (
            <div className="container2">
              <div className="flex-box2">
                <Card2
                  key={index}
                  place={place}
                  date={date}
                  mail={location.state.mail}
                />
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
  const mail = props.mail;
  let history = useHistory();
  const handleClick2 = () => {
    console.log(mail);
    history.push({
      pathname: "/booking-court",
      state: {
        title: place.name,
        prices: place.pricePerHour,
        place: place.location,
        courts_num: place.courts_num,
        courtsArray: place.courts,
        date: props.date
      }
    });
  };
  return (
    <div onClick={handleClick2}>
      <div className="cardd">
        <h2 className="place_courts">{place.name}</h2>
        <h2 className="price_courts">
          {place.pricePerHour.toString() + " EGP/Hour"}
        </h2>
        <img className="coin-img" src={coinWhite} alt="coin icon" />
      </div>
    </div>
  );
}
export default CourtsLocations;
