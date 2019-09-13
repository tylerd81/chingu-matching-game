import React from "react";

const ScoreLevel = ({ attempts }) => {
  // subtract 1 star for every 12 attempts
  let numStars = 3 - Math.floor(attempts / 12);
  if (numStars < 0) {
    numStars = 0;
  }

  const stars = ["", "⭐", "⭐⭐", "⭐⭐⭐"];

  return (
    <div>
      <h2>{stars[numStars]}</h2>
    </div>
  );
};

export default ScoreLevel;
