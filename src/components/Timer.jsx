import React, { useState, useEffect, useRef } from "react";
import "../../styles/Timer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Timer({ isActive, isNewGame }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    //To track if it's a new game
    if (isNewGame) {
      setMinutes(0);
      setSeconds(0);
    }
  }, [isNewGame]);

  useEffect(() => {
    //To track seconds
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  useEffect(() => {
    //To track minutes
    if (isActive) {
      const interval = setInterval(() => {
        setMinutes((prevMinutes) => prevMinutes + 1);
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <section className="timer-section">
      <h3>
        <FontAwesomeIcon icon={faClock} className="fa-icon" />
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h3>
    </section>
  );
}
