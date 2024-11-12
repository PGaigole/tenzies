import React, { useEffect } from "react";
import "../../styles/Scorecard.css";

export default function ScoreCard({ info }) {
  const [scores, setScores] = React.useState(() => getScoresfromLS());

  function setScoresinLS(scores) {
    localStorage.setItem("tenziesScore", JSON.stringify(scores));
  }
  function getScoresfromLS() {
    const savedScores = localStorage.getItem("tenziesScore");
    return savedScores ? JSON.parse(savedScores) : [];
  }

  useEffect(() => {
    const scoreExists = scores.some((score) => score.id === info.id);

    if (!scoreExists) {
      const updatedScores = [...scores, info];
      setScores(updatedScores);
      setScoresinLS(updatedScores);
    }
  }, [info]);
  return (
    <section className="scorecard-section">
      <h2>Top scores</h2>
      <table>
        <thead>
          <tr>
            <th>Rolls</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.rolls}</td>
              <td>
                {parseInt(score.minutes) > 0 &&
                  `${score.minutes} minute${score.minutes > 1 ? "s" : ""} `}
                {score.seconds} second{score.seconds > 1 ? "s" : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
