import React, { useState } from "react";
import { generateRandomNumber, playGame } from "../BusinessLogic";
import Confetti from "../Confetti";
import { Button, InputField } from "../Reusables";
import "./Card.css";

const Card = () => {
  const [value, setValue] = useState("");
  const [guessValueUpperBound, setGuessValueUpperBound] = useState("10");
  const [guessValueLowerBound, setGuessValueLowerBound] = useState("1");
  const [computerValue, setComputerValue] = useState(
    generateRandomNumber(guessValueLowerBound, guessValueUpperBound)
  );

  const defaultResult = "...waiting for your guess...";
  const [result, setResult] = useState(defaultResult);

  const defaultLastValue = "none";
  const [lastValue, setLastValue] = useState(defaultLastValue);
  const onClickHandler = () => {
    setLastValue(value);
    let res = playGame(
      value,
      guessValueLowerBound,
      guessValueUpperBound,
      computerValue
    );
    setResult(res);
  };

  const handleMakeGuessButton = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setLastValue(defaultLastValue);
    setValue("");
    setResult(defaultResult);
    setComputerValue(
      generateRandomNumber(guessValueLowerBound, guessValueUpperBound)
    );
  };

  return (
    <div className="main-container">
      <div className="container">
        {<Confetti result={result} />}
        <section className="game-info">
          <h2>Play</h2>
          <p>
            Guess a number between {guessValueLowerBound} and{" "}
            {guessValueUpperBound}.
          </p>
          <p>Last guess: {lastValue}</p>
          <p className="result">{result}</p>
        </section>
        <section className="guess-section">
          <InputField
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your guess"
          />
          <Button
            ptag={"Make guess"}
            type="submit"
            onClick={onClickHandler}
            onChange={handleMakeGuessButton}
          />
        </section>

        <hr />

        <section className="config-section">
          <h4>Game Config</h4>
          <InputField
            value={guessValueLowerBound}
            type="text"
            onChange={(e) => setGuessValueLowerBound(e.target.value)}
            placeholder="Enter lower bound"
          />
          <InputField
            value={guessValueUpperBound}
            type="text"
            onChange={(e) => setGuessValueUpperBound(e.target.value)}
            placeholder={"Enter upper bound"}
          />
          <Button ptag={"Reset"} type="submit" onClick={handleReset} />
        </section>
      </div>
    </div>
  );
};

export default Card;
