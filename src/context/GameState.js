import React, { useState } from "react";
import GameContext from "./gameContext";

const GameState = props => {
  const [gameName, setGameName] = useState("Matching Game");

  return (
    <GameContext.Provider value={{ gameName }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
