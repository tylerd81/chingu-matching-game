import React from "react";

const NewGameButton = ({ newGameHandler }) => {
  return (
    <button onClick={newGameHandler} type="button" className="game-button">
      New Game
    </button>
  );
};

export default NewGameButton;
