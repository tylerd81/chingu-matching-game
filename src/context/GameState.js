import React, { useReducer, useEffect } from "react";
import GameContext from "./gameContext";
import createDeck from "../game-items/deck";
import GameStateReducer from "./gameReducer";
import { SET_NUM_CLICKS, SET_SCORE, SET_CARDS_CLICKED } from "./types";

const GameState = props => {
  const initialState = {
    numClicks: 0,
    deck: [],
    score: { numMatches: 0, attempts: 0 },
    gameBoardVisible: true,
    gameFinished: false,
    cardsClicked: []
  };

  useEffect(() => {
    initialState.deck = createDeck();
  }, []);

  const [state, dispatch] = useReducer(GameStateReducer, initialState);

  const setNumClicks = numClicks => {
    dispatch({ type: SET_NUM_CLICKS, payload: numClicks });
  };

  const setScore = score => {
    dispatch({ type: SET_SCORE, payload: score });
  };

  const setCardsClicked = cardsClicked => {
    dispatch({ type: SET_CARDS_CLICKED, payload: cardsClicked });
  };

  return (
    <GameContext.Provider
      value={{
        numClicks: state.numClicks,
        score: state.score,
        cardsClicked: state.cardsClicked,
        setCardsClicked,
        setNumClicks,
        setScore
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
