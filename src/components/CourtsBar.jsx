import React, { useState, useRef, useEffect } from "react";
import peopleBlack from "../assets/images/peopleBlack.png";
import clockBlack from "../assets/images/clockBlack.png";
import calendarBlack from "../assets/images/calenderBlack.png";
import dividerBlack from "../assets/images/dividerBlack.png";
import Calendar from "react-calendar";

function CourtsBar() {
  const [openCalender, setOpenCalender] = useState(false);
  const [openSlots, setOpenSlots] = useState(false);
  const [openPlayers, setOpenPlayers] = useState(false);
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState(1);
  const [players, setPlayers] = useState(1);
  const dropdownRefCalender = useRef(null);
  const dropdownRefSlots = useRef(null);
  const dropdownRefPlayers = useRef(null);

  //close when user clicks outside the drop-down item
  useEffect(() => {
    const pageClickEvent = e => {
      if (
        dropdownRefCalender.current !== null &&
        !dropdownRefCalender.current.contains(e.target)
      ) {
        setOpenCalender(!openCalender);
      }
      if (
        dropdownRefSlots.current !== null &&
        !dropdownRefSlots.current.contains(e.target)
      ) {
        setOpenSlots(!openSlots);
      }
      if (
        dropdownRefPlayers.current !== null &&
        !dropdownRefPlayers.current.contains(e.target)
      ) {
        setOpenPlayers(!openPlayers);
      }
    };

    if (openSlots || openCalender || openPlayers) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [openCalender, openSlots, openPlayers]);

  const handleCalenderClick = () => setOpenCalender(!openCalender);
  const handleSlotsClick = () => setOpenSlots(!openSlots);
  const handlePlayersClick = () => {
    setOpenPlayers(!openPlayers);
    console.log("Players Clicked value");
    console.log(openPlayers);
  };

  const handleSlotsInc = () => setSlots(slots + 1);
  const handleSlotsDec = () => {
    if (slots > 1) {
      setSlots(slots - 1);
    }
  };
  const handlePlayersInc = () => setPlayers(players + 1);
  const handlePlayersDec = () => {
    if (players > 1) {
      setPlayers(players - 1);
    }
  };

  return (
    <>
      <div className="options-bar-container font-all">
        <div className="calender-container">
          <button
            onClick={handleCalenderClick}
            type="button"
            className="options-bar-item"
          >
            <img
              height="32"
              width="32"
              src={calendarBlack}
              alt="calender icon"
            />
            <div className="item-text">
              {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
            </div>
          </button>
          {openCalender && (
            <div ref={dropdownRefCalender} className="calender-drop-down">
              <Calendar onChange={setDate} value={date} minDate={new Date()} />
            </div>
          )}
        </div>
        <img height="32" width="64" src={dividerBlack} alt="divider icon" />
        <div className="slots-container">
          <button
            className="options-bar-item"
            onClick={handleSlotsClick}
            type="button"
          >
            <img height="32" width="32" src={clockBlack} alt="clock icon" />
            <div className="item-text">Needs {slots} Hour/s</div>
          </button>
          {openSlots && (
            <div ref={dropdownRefSlots} className="slots-drop-down">
              <button className=" counter-btn" onClick={handleSlotsInc}>
                +
              </button>
              <div className=" counter-num">{slots}</div>
              <button className=" counter-btn" onClick={handleSlotsDec}>
                -
              </button>
            </div>
          )}
        </div>
        <img height="32" width="64" src={dividerBlack} alt="divider icon" />
        <div className=" players-container">
          <button
            className="options-bar-item"
            onClick={handlePlayersClick}
            type="button"
          >
            <img height="32" width="32" src={peopleBlack} alt="people icon" />
            <div className="item-text">{players} Player/s</div>
          </button>
          {openPlayers && (
            <div ref={dropdownRefPlayers} className="players-drop-down">
              <button className=" counter-btn" onClick={handlePlayersInc}>
                +
              </button>
              <div className=" counter-num">{players}</div>
              <button className=" counter-btn" onClick={handlePlayersDec}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CourtsBar;
