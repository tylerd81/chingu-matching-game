import React from "react";

const NewGameButton = ({ newGameHandler }) => {
  return (
    <button onClick={newGameHandler} type="button" className="new-game-button">
      New Game
    </button>
  );
};

export default NewGameButton;
