import React from "react";
import timeString from "../utils/timeString";

const GameTimer = ({ ticks }) => {
  const ts = timeString(ticks);

  return <div className="game-timer">{ts}</div>;
};
export default GameTimer;
