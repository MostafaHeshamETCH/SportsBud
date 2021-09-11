import React from "react";
import BookingCard from "./BookingCard";
import NavBarOneBtn from "./NavBarOneBtn";
import { getAuth, signOut } from "firebase/auth";

function CurrBookingsPage() {
  return (
    <>
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
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </>
  );
}
export default CurrBookingsPage;
