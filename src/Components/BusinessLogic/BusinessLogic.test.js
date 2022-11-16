import React from "react";

import { generateRandomNumber, playGame } from "./BusinessLogic";

describe("playGame logic test", () => {
  test("test that generated random number is right and within specified range", () => {
    let min = 1;
    let max = 10;
    expect(typeof generateRandomNumber(min, max)).toBe("number");
    expect(generateRandomNumber(min, max)).toBeGreaterThanOrEqual(min);
    expect(generateRandomNumber(min, max)).toBeLessThanOrEqual(max);
  });

  test("test that upon correct guess, game will be won", () => {
    let min = 1;
    let max = 10;
    let userGuess = 5;
    let computerGuess = 5;

    expect(playGame(userGuess, min, max, computerGuess)).toBe("You are right");
  });

  test("test that upon incorrect range, game will return the right warning", () => {
    let min = 10;
    let max = 1;
    let userGuess = 5;
    let computerGuess = 5;

    expect(playGame(userGuess, min, max, computerGuess)).toBe(
      "Lower bound cannot be greater than upper bound"
    );
  });

  test("test that upon entering non-numerical value, game will return the right warning", () => {
    let min = 1;
    let max = 10;
    let userGuess = "W";
    let computerGuess = 5;

    expect(playGame(userGuess, min, max, computerGuess)).toBe(
      "Enter numbers only"
    );
  });

  test("test that upon incorrect a value not within specified range, game will return the right warning", () => {
    let min = 1;
    let max = 10;
    let userGuess_1 = 0,
      userGuess_2 = 11;
    let computerGuess = 5;

    expect(playGame(userGuess_1, min, max, computerGuess)).toBe(
      "Enter number within range"
    );
    expect(playGame(userGuess_2, min, max, computerGuess)).toBe(
      "Enter number within range"
    );
  });
});
