import React, { useContext } from "react";
import NewGameButton from "./NewGameButton";
import ScoreLevel from "./ScoreLevel";
import GameContext from "../context/gameContext";

const GameOverDialog = ({ newGameHandler }) => {
  const startNewGame = () => newGameHandler();
  const { score, cheatUsed } = useContext(GameContext);

  const WinnerDialog = props => {
    return (
      <div>
        <h1>Game Complete!</h1>
        <h2>You won after {score.attempts} moves!</h2>
        <ScoreLevel attempts={score.attempts} />
      </div>
    );
  };

  const QuitterDialog = props => {
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
    </div>
  );
};

export default GameOverDialog;
