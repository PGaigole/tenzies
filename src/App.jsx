import React from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  //We are using 10 dice
  const numberOfDice = 10;
  const [dice, setDice] = React.useState(initRandomDice(numberOfDice));

  function initRandomDice(n) {
    return Array.from({ length: n }, () => ({
      value: generateRandomNumber(),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function generateRandomNumber() {
    //Generate random number between 1 to 6
    return Math.ceil(Math.random() * 6);
  }

  function rollDice() {
    setDice(initRandomDice(numberOfDice));
  }

  function holdDie(id) {
    //based on id of the id, we need to hold the die
    const holdDie = dice.map((die) => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
    });
    return setDice(holdDie);
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
              <Die
                key={die.id}
                value={die.value}
                isHeld={die.isHeld}
                id={die.id}
                click={holdDie}
              />
            ))}
          </section>
          <button onClick={rollDice}>Roll</button>
        </section>
      </section>
    </main>
  );
}

export default App;
