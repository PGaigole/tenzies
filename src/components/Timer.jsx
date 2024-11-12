import React, { useState, useEffect, useRef } from "react";
import "../../styles/Timer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prevMinutes) => prevMinutes + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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
