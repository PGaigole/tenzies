import React from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  //We are using 10 dice
  const numberOfDice = 10;
  const [dice, setDice] = React.useState(initRandomDice(numberOfDice));
  const [tenzies, setTenzies] = React.useState(false);

  function generateDie() {
    return {
      value: generateRandomNumber(),
      isHeld: false,
      id: nanoid(),
    };
  }

  function initRandomDice(n) {
    return Array.from({ length: n }, () => generateDie());
  }

  function generateRandomNumber() {
    //Generate random number between 1 to 6
    return Math.ceil(Math.random() * 6);
  }

  function rollDice() {
    if (tenzies) {
      //reset the game
      setDice(initRandomDice(numberOfDice));
      setTenzies(false);
    } else {
      setDice((oldDice) =>
        oldDice.map((die) => (die.isHeld ? die : generateDie()))
      );
    }
  }

  function holdDie(id) {
    //based on id of the id, we need to hold the die
    const holdDie = dice.map((die) => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
    });
    setDice(holdDie);
  }

  function endGame() {
    const allDiceValue = dice.every((die) => die.value === dice[0].value);
    const allDiceHeld = dice.every((die) => die.isHeld);
    if (allDiceValue && allDiceHeld) {
      setTenzies(true);
    }
  }

  React.useEffect(() => {
    endGame();
  }, [dice]);

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
          <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </section>
      </section>
    </main>
  );
}

export default App;
