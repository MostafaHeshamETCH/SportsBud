import React from "react";
import BookingCard from "./BookingCard";
import NavBarOneBtn from "./NavBarOneBtn";

export default function CurrBookingsPage() {
  return (
    <>
      <NavBarOneBtn btnTxt="Bookings" />
      <div className="CurrentBookings font-all">
        <span className="currBookingsTitle">Current Bookings</span>
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </>
  );
}
