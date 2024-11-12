import React from "react";
import "../../styles/Scorecard.css";

export default function ScoreCard({ info }) {
  const { rolls, minutes, seconds } = info;
  return (
    <section className="scorecard-section">
      <h2>Top scores</h2>
      <table>
        <tr>
          <th>Rolls</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>{rolls}</td>
          <td>
            {parseInt(minutes) > 0 &&
              `${minutes} minute${minutes > 1 ? "s" : ""} `}
            {seconds} second{seconds > 1 ? "s" : ""}
          </td>
        </tr>
      </table>
    </section>
  );
}
