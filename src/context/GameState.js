import React, { useReducer, useEffect } from "react";
import GameContext from "./gameContext";
import createDeck from "../game-items/deck";
import GameStateReducer from "./gameReducer";
import { SET_NUM_CLICKS } from "./types";

const GameState = props => {
  const initialState = {
    numClicks: 0,
    deck: [],
    score: { numMatches: 0, attempts: 0 },
    gameBoardVisible: true,
    gameFinished: false
  };

  useEffect(() => {
    initialState.deck = createDeck();
  }, []);

  const [state, dispatch] = useReducer(GameStateReducer, initialState);

  const setNumClicks = numClicks => {
    dispatch({ type: SET_NUM_CLICKS, payload: numClicks });
  };

  return (
    <GameContext.Provider
      value={{
        numClicks: state.numClicks,
        setNumClicks
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
