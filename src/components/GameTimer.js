import React, { useEffect, useContext, useState } from "react";
import GameContext from "../context/gameContext";

const GameTimer = props => {
  const [timerId, setTimerId] = useState();

  const gameContext = useContext(GameContext);
  const { setTicks, ticks } = gameContext;

  useEffect(() => {
    const timerId = setInterval(() => {
      setTicks(1);
    }, 1000);

    setTimerId(timerId);
  }, []);

  if (props.paused === true) {
    clearInterval(timerId);
    setTimerId(null);
  }

  return <div>{ticks}</div>;
};
export default GameTimer;
