import React from "react";
import NewGameButton from "./NewGameButton";

const GameOverDialog = ({ newGameHandler }) => {
  const startNewGame = () => newGameHandler();

  return (
    <div className="game-over-dialog">
      <h1>Game Complete!</h1>
      <NewGameButton newGameHandler={startNewGame} />
    </div>
  );
};

export default GameOverDialog;
