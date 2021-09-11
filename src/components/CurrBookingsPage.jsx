import React from "react";
import BookingCard from "./BookingCard";
import NavBarOneBtn from "./NavBarOneBtn";

function CurrBookingsPage() {
  return (
    <>
      <NavBarOneBtn btnTxt="BOOKINGS" />
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
