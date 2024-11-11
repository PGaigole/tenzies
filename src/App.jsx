import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = React.useState(initRandomDice());

  function initRandomDice() {
    //We are using 10 dice
    const allDice = new Array(10);
    allDice.fill(0);
    return allDice.map(() => generateRandomNumber());
  }

  function generateRandomNumber() {
    //Generate random number between 1 to 6
    return Math.ceil(Math.random() * 6);
  }

  function rollDice() {
    setDice(initRandomDice());
  }

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
            {dice.map((die) => (
              <Die value={die} />
            ))}
          </section>
          <button onClick={rollDice}>Roll</button>
        </section>
      </section>
    </main>
  );
}

export default App;
