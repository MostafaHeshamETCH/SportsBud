import React, { useState } from "react";
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
  const date = location.state.date;
  return (
    <div className=" max-width-auto">
      <NavBarOneBtn btnTxt="Bookings" />
      <div className="BookingCourtTitle">
        <div className="CourtName">
          {location.state.title}
          <p className="no9"> 9 </p>
          <h2>{date}</h2>
          <div className="availableSlots">Available Slots</div>
        </div>
        <div>
          <img
            className="LocationImgSmall"
            src={LocationImgBlack}
            alt="location"
          />
          <p className="locationN"> {location.state.place} </p>
          <img
            className="CalendarImgSmall"
            src={CalendarImgBlack}
            alt="calendar"
          />
          <p className="dateplacement">
            {" "}
            {location.state.date.getDate()} /{" "}
            {location.state.date.getMonth() + 1} /{" "}
            {location.state.date.getFullYear()}{" "}
          </p>
          <p className="numberOfCourts"> {location.state.courts_num}</p>
          <p className="newPara">Court/s</p>
        </div>
        <div>
          {data.map(court => {
            return (
              <Card3
                tg={court.ID}
                court={court}
                date={location.state.date}
                key={court.ID}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card3(props) {
  var ss = props.tg;
  const filteredDay = props.court.daysAndAvailableHours
    .filter(
      da =>
        da.date ===
        props.date.getDate() +
          " / " +
          (props.date.getMonth() + 1) +
          " / " +
          props.date.getFullYear()
    )[0]
    .availableHours.filter(ah => ah.isAvailable);

  const half = Math.ceil(filteredDay.length / 2);
  const currTimes1 = filteredDay.slice(0, half);
  const currTimes2 = filteredDay.slice(half, filteredDay.length);

  const isCheckedArraytemp = new Array(half).fill(true);
  var [checked1, setChecked1] = useState(isCheckedArraytemp);
  var [checked2, setChecked2] = useState(isCheckedArraytemp);

  return (
    <div>
      <div className="bookingContainer2 font-all" id="bookingCourtCard2">
        <div className="bookingName">
          <p>COURT {ss}</p>
        </div>
        <div className="courtNumber">
          <p>AVAILABLE BOOKINGS</p>
        </div>
        <div className="Timings">
          <table className="timings-table">
            {currTimes1.map((currTime, index) => (
              <tr className="table-row">
                <img className="ClockImgSmall" src={ClockImg} alt="clock" />
                <td className="aligning-fonts">{currTime.slotTime} </td>
                <button>
                  {checked1[index] && (
                    <img
                      className="ClockImgSmall"
                      src={UnFilledMark}
                      alt="checkmark"
                      onClick={() => {
                        let newArr = [...checked1];
                        newArr[index] = false;
                        setChecked1(newArr);
                      }}
                    />
                  )}
                  {!checked1[index] && (
                    <img
                      className="ClockImgSmall"
                      src={FilledMark}
                      alt="checkmark"
                      onClick={() => {
                        let newArr = [...checked1];
                        newArr[index] = true;
                        setChecked1(newArr);
                      }}
                    />
                  )}
                </button>
              </tr>
            ))}
          </table>
          <table className="timings-table2">
            {currTimes2.map((currTime, index) => (
              <tr className="table-row">
                <img className="ClockImgSmall" src={ClockImg} alt="clock" />
                <td className="aligning-fonts">{currTime.slotTime} </td>
                <button>
                  {checked2[index] && (
                    <img
                      className="ClockImgSmall"
                      src={UnFilledMark}
                      alt="checkmark"
                      onClick={() => {
                        let newArr = [...checked2];
                        newArr[index] = false;
                        setChecked2(newArr);
                      }}
                    />
                  )}
                  {!checked2[index] && (
                    <img
                      className="ClockImgSmall"
                      src={FilledMark}
                      alt="checkmark"
                      onClick={() => {
                        let newArr = [...checked2];
                        newArr[index] = true;
                        setChecked2(newArr);
                      }}
                    />
                  )}
                </button>
              </tr>
            ))}
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
