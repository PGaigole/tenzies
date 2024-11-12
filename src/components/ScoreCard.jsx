import React from "react";
import "../../styles/Scorecard.css";

export default function ScoreCard({ info }) {
  const { rolls, minutes, seconds } = info;
  return (
    <section className="scorecard-section">
      <h3>
        {rolls} rolls -{" "}
        {parseInt(minutes) > 0 && `${minutes} minute${minutes > 1 ? "s" : ""} `}
        {seconds} second{seconds > 1 ? "s" : ""}
      </h3>
    </section>
  );
}
