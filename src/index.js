import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GameState from "./context/GameState";

const MatchingGame = props => {
  return (
    <GameState>
      <App />
    </GameState>
  );
};
ReactDOM.render(<MatchingGame />, document.getElementById("root"));
