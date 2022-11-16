import React from 'react';
import Confetti from "react-confetti";

const CustomConfetti = ({ result }) => {
  const check = result === "You are right";
  return <div>{check && <Confetti width={"400px"} height={"500px"} />}</div>;
};

export default CustomConfetti;
