import React, { useContext } from "react";
import NewGameButton from "./NewGameButton";
import ScoreLevel from "./ScoreLevel";
import GameContext from "../context/gameContext";
import timeString from "../utils/timeString";

const GameOverDialog = ({ newGameHandler, ticks }) => {
  const startNewGame = () => newGameHandler();
  const { score, cheatUsed } = useContext(GameContext);

  const WinnerDialog = () => {
    return (
      <div>
        <h1>Game Complete!</h1>
        <h2>You won after {score.attempts} moves!</h2>
        <h2>Your time was: {timeString(ticks)}</h2>
        <ScoreLevel attempts={score.attempts} />
      </div>
    );
  };

  const QuitterDialog = () => {
    return (
      <div>
        <h1>You quit after {score.attempts} moves!</h1>
      </div>
    );
  };

  return (
    <div className="game-over-dialog">
      {cheatUsed ? <QuitterDialog /> : <WinnerDialog />}

      <NewGameButton newGameHandler={startNewGame} />
      <p className="about">
        This game was made for the Chingu Solo Project. You can view the Github
        repo <a href="https://github.com/tylerd81/chingu-matching-game">here</a>
        .
      </p>
    </div>
  );
};

export default GameOverDialog;
