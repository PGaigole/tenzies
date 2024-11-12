import React, { useState, useEffect, useRef } from "react";
import "../../styles/Timer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Timer({
  isActive,
  isNewGame,
  onTimeChange,
  minutes,
  seconds,
}) {
  useEffect(() => {
    //To track if it's a new game
    if (isNewGame) {
      onTimeChange(0, 0);
    }
  }, [isNewGame]);

  useEffect(() => {
    //To track seconds
    if (isActive) {
      const interval = setInterval(() => {
        seconds === 59
          ? onTimeChange(minutes + 1, seconds)
          : onTimeChange(minutes, seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, onTimeChange, minutes, seconds]);

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
