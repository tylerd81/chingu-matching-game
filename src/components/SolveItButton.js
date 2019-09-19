import React, { useContext } from "react";

const SolveItButton = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler} type="button" className="game-button">
      I Give Up!
    </button>
  );
};

export default SolveItButton;
