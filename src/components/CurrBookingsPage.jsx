import React from "react";
import BookingCard from "./BookingCard";
import NavBarOneBtn from "./NavBarOneBtn";
import { getAuth, signOut } from "firebase/auth";
import { useLocation } from "react-router";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

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

function CurrBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(readData());
  }, []);

  const readData = async () => {
    const bookings = [];
    const db = getFirestore();
    const bookingsIns = await getDocs(collection(db, "Bookings"));

    bookingsIns.forEach((doc) => {
      const data = doc.data();
      const booking = new Booking(
        data.place_name,
        data.court_name,
        data.location,
        data.slots,
        data.total_amount,
        data.email
      );
      bookings.push(booking);
    });
    return bookings;
  };

  return (
    <>
      <div className=" main font-all max-width-auto">
        <NavBarOneBtn
          btnTxt="SIGN OUT"
          clickMe={() => {
            const auth = getAuth();
            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                alert(error);
              });
          }}
        />
        <div className="CurrentBookings font-all">
          <span className="currBookingsTitle">Current Bookings</span>
          <div className="wrapper2">
            {bookings.map((record) => {
              console.log(record);
              //  if (record.email === mail) {
              console.log(record.email);
              return (
                <div key={record.id} className="flex-box3">
                  <BookingCard
                    mail={record.email}
                    location={record.place_name}
                  />
                </div>
              );
              //}
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default CurrBookingsPage;
