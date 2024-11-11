import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <main className="main-container">
      <section className="main-section">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <section className="dice-main-container">
          <section className="dice-container">
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
            <Die value="1" />
          </section>
          <button>Roll</button>
        </section>
      </section>
    </main>
  );
}

export default App;
