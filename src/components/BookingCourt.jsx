import React from "react";
import ClockImg from "../assets/images/clock.png";
import LocationImgBlack from "../assets/images/locationBlack.png";
import CalendarImgBlack from "../assets/images/calenderBlack.png";
import CoinWhite from "../assets/images/coinWhite.png";
import FilledMark from "../assets/images/checkmarkWhiteFilled.png";
import UnFilledMark from "../assets/images/checkmarkWhiteOutline.png";
import NavBarOneBtn from "./NavBarOneBtn";
import { useLocation } from "react-router-dom";

function BookingCourt() {
  const location = useLocation();
  var count = 0;
  const data = location.state.courtsArray;
  return (
    <div>
      <NavBarOneBtn btnTxt="Bookings" />
      <div className="BookingCourtTitle">
        <div className="CourtName">
          {location.state.title}
          <p className="no9"> 9 </p>
          <div className="availableSlots">Available Slots</div>
        </div>
        <div>
          <img
            className="LocationImgSmall"
            src={LocationImgBlack}
            alt="location"
          />
          <p className="locationN"> {location.state.place}</p>
          <img
            className="CalendarImgSmall"
            src={CalendarImgBlack}
            alt="calendar"
          />
          <p className="dateplacement"> 3/9/2021</p>
          <p className="numberOfCourts"> {location.state.courts_num}</p>
          <p className="newPara">Court/s</p>
        </div>
        <div>
          {data.map((court) => {
            console.log(court);
            return <Card3 tg={court.ID} arr1={court} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Card3(props) {
  var ss = props.tg;
  var arr = props.arr1.daysAndAvailableHours;
  console.log(arr);
  return (
    <div className="WideCard">
      <div className="bookingContainer font-all" id="bookingCourtCard">
        <div className="bookingName">
          <p>COURT {ss}</p>
        </div>
        <div className="courtNumber">
          <p>AVAILABLE BOOKINGS</p>
        </div>
        <div className="Timings">
          <table className="timings-table">
            <tr className="table-row">
              <img className="ClockImgSmall" src={ClockImg} alt="clock" />
              <td className="aligning-fonts">11:00 AM - 12:00 PM</td>
              <button>
                <img
                  className="ClockImgSmall"
                  src={UnFilledMark}
                  alt="checkmark"
                />
              </button>
            </tr>

            <tr>
              <img className="ClockImgSmall" src={ClockImg} alt="clock" />
              <td className="aligning-fonts">12:00 PM - 1:00 PM</td>
              <button>
                <img
                  className="ClockImgSmall"
                  src={UnFilledMark}
                  alt="checkmark"
                />
              </button>
            </tr>

            <tr>
              <img className="ClockImgSmall" src={ClockImg} alt="clock" />
              <td className="aligning-fonts">1:00 PM - 2:00 PM</td>
              <button>
                <img
                  className="ClockImgSmall"
                  src={UnFilledMark}
                  alt="checkmark"
                />
              </button>
            </tr>
          </table>

          <table className="timings-table2">
            <tr className="table-row">
              <img className="ClockImgSmall" src={ClockImg} alt="clock" />
              <td className="aligning-fonts">3:00 PM - 5:00 PM</td>
              <button>
                <img
                  className="ClockImgSmall"
                  src={UnFilledMark}
                  alt="checkmark"
                />
              </button>
            </tr>

            <tr>
              <img className="ClockImgSmall" src={ClockImg} alt="clock" />
              <td className="aligning-fonts">6:00 PM - 7:00 PM</td>
              <button>
                <img
                  className="ClockImgSmall"
                  src={UnFilledMark}
                  alt="checkmark"
                />
              </button>
            </tr>

            <tr>
              <img className="ClockImgSmall" src={ClockImg} alt="clock" />
              <td className="aligning-fonts">9:00 PM - 10:00 PM</td>
              <button>
                <img
                  className="ClockImgSmall"
                  src={UnFilledMark}
                  alt="checkmark"
                />
              </button>
            </tr>
          </table>
        </div>
        <div className="confirm-button">
          <button className="button-position">CONFIRM BOOKING</button>
        </div>
        <div className="time" id="PriceTag">
          <img className="coinImg" src={CoinWhite} alt="clock" />
          <p>320/HOUR</p>
        </div>
      </div>
    </div>
  );
}

export default BookingCourt;
