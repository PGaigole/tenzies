import React from "react";
import "../../styles/Rolls.css";

export default function Rolls({ howMany }) {
  return (
    <section className="rolls-section">
      <label>Rolls: </label>
      <span>{howMany}</span>
    </section>
  );
}
