function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isRangeValid(min, max) {
  return min < max;
}

function isWithinRange(userGuess, min, max) {
  return userGuess >= min && userGuess <= max;
}

function isValid(min, max, userGuess) {
  return (
    typeof min === "number" &&
    !isNaN(min) &&
    typeof max === "number" &&
    !isNaN(max) &&
    typeof userGuess === "number" &&
    !isNaN(userGuess)
  );
}

function checkUserGuessAgainstComputerGuess(userGuess, computerGuess) {
  if (userGuess > computerGuess) return "Too high";
  else if (userGuess < computerGuess) return "Too low";
  return "You are right";
}

function playGame(userGuess, min, max, computerGuess) {
  userGuess = Number(userGuess);
  min = Number(min);
  max = Number(max);

  if (isValid(min, max, userGuess)) {
    if (isRangeValid(min, max)) {
      if (isWithinRange(userGuess, min, max)) {
        return checkUserGuessAgainstComputerGuess(userGuess, computerGuess);
      }
      return "Enter number within range";
    }
    return "Lower bound cannot be greater than upper bound";
  }
  return "Enter numbers only";
}

export { generateRandomNumber, playGame };
