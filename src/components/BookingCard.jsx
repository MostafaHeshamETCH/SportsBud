import React from 'react'
import ClockImg from '../assets/images/clock.png'
import LocationImg from '../assets/images/location.png'

export default function BookingCard() {
    return (
        <div className="bookingContainer font-all">
            <div className="bookingName">
                <p>OMAR ELKORDY</p>
            </div>
            <div className="courtNumber">
                <p>COURT 1</p>
            </div>
            <div className="location">
                <img className="locationImg" src={LocationImg} alt="location" />
                <div className="locationName">NEW CAIRO</div>
            </div>
            <div className="price">
                <p>650.0 EGP</p>
            </div>
            <div className="time">
                <img className="clockImg" src={ClockImg} alt="clock" />
                <p>8:00 AM - 10:00 AM</p>
            </div>
        </div>
    )
}
