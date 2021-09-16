import React, { useState, useContext } from "react";
import ClockImg from "../assets/images/clock.png";
import LocationImgBlack from "../assets/images/locationBlack.png";
import CalendarImgBlack from "../assets/images/calenderBlack.png";
import CoinWhite from "../assets/images/coinWhite.png";
import FilledMark from "../assets/images/checkmarkWhiteFilled.png";
import UnFilledMark from "../assets/images/checkmarkWhiteOutline.png";
import NavBarOneBtn from "./NavBarOneBtn";
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

function BookingCourt() {
  const location = useLocation();
  const data = location.state.courtsArray;
  var count = 0;
  var filteredDay;
  let history = useHistory();

  const bookingBtnClick = () => {
    history.push("/current-bookings");
  };
  return (
    <div className=" main font-all max-width-auto">
      <NavBarOneBtn btnTxt="BOOKINGS" clickMe={bookingBtnClick} />
      <div className="BookingCourtTitle">
        <div className="CourtName">
          {location.state.title}
          <p className="no9">
            {" "}
            {data.map((court, index) => {
              //console.log(court);
              filteredDay = court.daysAndAvailableHours.filter(
                da =>
                  da.date ===
                  location.state.date.getDate() +
                    " / " +
                    (location.state.date.getMonth() + 1) +
                    " / " +
                    location.state.date.getFullYear()
              )[0];

              for (var i = 0; i < 18; i++) {
                if (filteredDay.availableHours[i].isAvailable === true) {
                  count++;
                }
              }
            })}{" "}
            {count}
          </p>
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
            //console.log(court);
            return (
              <Card3
                tg={court.ID}
                court={court}
                date={location.state.date}
                key={court.ID}
                prices={location.state.prices}
                title={location.state.title}
                location={location.state.place}
                // mail={location.state.mail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card3(props) {
  const { currentUser } = useContext(AuthContext);
  var title = props.title;
  var location = props.location;
  var id = props.tg;
  var prices = props.prices;
  var slot_array = [];
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
  // var newArray = [];

  let history = useHistory();

  // newArray.push(...checked1, ...checked2); //putting both of them in one array to be used down to get slot times
  //console.log(newArray);

  var [currentSelection1, setCurrentSelection1] = useState([]);
  var [currentSelection2, setCurrentSelection2] = useState([]);
  var [currentSelectionFinal, setCurrentSelectionFinal] = useState([]);
  console.log(currentSelection1);
  console.log(currentSelection2);

  //Assigning the changes in isAvailable to be sent and stored in DB
  // var x = props.court.daysAndAvailableHours.filter(
  //   da =>
  //     da.date ===
  //     props.date.getDate() +
  //       " / " +
  //       (props.date.getMonth() + 1) +
  //       " / " +
  //       props.date.getFullYear()
  // );
  // x.forEach(item => {
  //   item.availableHours.forEach((time, index) => {
  //     time.isAvailable = newArray[index];
  //     //console.log(time.isAvailable);
  //     if (time.isAvailable !== true) {
  //       slot_array.push(time.slotTime);
  //     }
  //   });
  // });
  //console.log(slot_array);

  const writeData = async () => {
    const db = getFirestore();
    try {
      await addDoc(collection(db, "Bookings"), {
        place_name: title,
        court_name: "Court " + id,
        location: location,
        slots: currentSelection1.concat(currentSelection2),
        total_amount: prices,
        email: currentUser.email
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  // const readData = async () => {
  //   console.log("ana");
  //   const bookings = [];
  //   const db = getFirestore();
  //   const bookingsIns = await getDocs(collection(db, "Bookings"));
  //   //console.log(bookingsIns);
  //   /* const bookingsIns2 = bookingsIns.filter(
  //     (da) => da.email === location.state.mail
  //   );*/
  //   bookingsIns.forEach(doc => {
  //     console.log(doc);

  //     const data = doc.data();
  //     const booking = new Booking(
  //       data.place_name,
  //       data.court_name,
  //       data.location,
  //       data.slots,
  //       data.total_amount,
  //       data.email
  //     );

  //     bookings.push(booking);
  //   });
  //   return bookings;
  // };

  const handleClick = async e => {
    console.log(currentUser.email);
    writeData();
    history.push("/current-bookings");
  };

  return (
    <div>
      <div className="bookingContainer2 font-all" id="bookingCourtCard2">
        <div className="bookingName">
          <p>COURT {id}</p>
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
                        let tempCurrentSelection = [...currentSelection1];
                        tempCurrentSelection.push(filteredDay[index]);
                        setCurrentSelection1(tempCurrentSelection);
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
                        let tempCurrentSelection = [...currentSelection1];
                        tempCurrentSelection.splice(
                          tempCurrentSelection.indexOf(filteredDay[index]),
                          1
                        );
                        setCurrentSelection1(tempCurrentSelection);
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
                        let tempCurrentSelection = [...currentSelection2];
                        tempCurrentSelection.push(filteredDay[half + index]);
                        setCurrentSelection2(tempCurrentSelection);
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
                        let tempCurrentSelection = [...currentSelection2];
                        tempCurrentSelection.splice(
                          tempCurrentSelection.indexOf(
                            filteredDay[half + index]
                          ),
                          1
                        );
                        setCurrentSelection2(tempCurrentSelection);
                      }}
                    />
                  )}
                </button>
              </tr>
            ))}
          </table>
        </div>
        <div className="confirm-button">
          <button onClick={handleClick} className="button-position">
            CONFIRM BOOKING
          </button>
        </div>
        <div className="time" id="PriceTag">
          <img className="coinImg" src={CoinWhite} alt="clock" />
          <p>{prices} EGP/HOUR</p>
        </div>
      </div>
    </div>
  );
}

export default BookingCourt;
