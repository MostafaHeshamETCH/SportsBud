import React from "react";
import BookingCard from "./BookingCard";
import { useLocation } from "react-router-dom";
import NavBarOneBtn from "./NavBarOneBtn";
import { getAuth, signOut } from "firebase/auth";

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
  const location = useLocation();

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
              .catch(error => {
                alert(error);
              });
          }}
        />
        <div className="CurrentBookings font-all">
          <span className="currBookingsTitle">Current Bookings</span>
          <div className="wrapper2">
            <div className="flex-box3">
              {location.state.bookings.map(booking => {
                return (
                  <BookingCard
                    placeName={booking.place_name}
                    location={booking.location}
                    slot={booking.slots}
                    courtName={booking.court_name}
                    totalAmount={booking.total_amount}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CurrBookingsPage;
