import React, { useReducer, useEffect } from "react";
import GameContext from "./gameContext";
import createDeck from "../game-items/deck";
import GameStateReducer from "./gameReducer";
import {
  SET_NUM_CLICKS,
  SET_SCORE,
  SET_CARDS_CLICKED,
  SET_GAME_BOARD_VISIBLE,
  SET_CARD_FACE_DOWN,
  SET_CARD_FACE_UP,
  SET_DECK,
  SET_GAME_FINISHED,
  SET_CHEAT_USED,
  SET_TICKS
} from "./types";

const GameState = props => {
  const initialState = {
    numClicks: 0,
    deck: createDeck(), //TODO: gets called everytime GameState is rerendered...
    score: { numMatches: 0, attempts: 0 },
    gameBoardVisible: true,
    gameFinished: false,
    cardsClicked: [],
    cheatUsed: false,
    ticks: 0
  };

  const [state, dispatch] = useReducer(GameStateReducer, initialState);

  const createNewDeck = () => {
    const deck = createDeck();
    dispatch({ type: SET_DECK, payload: deck });
  };

  const setCardFaceUp = cardIndex => {
    if (state.deck[cardIndex].faceUp === false) {
      dispatch({ type: SET_CARD_FACE_UP, payload: cardIndex });
    }
  };

  const setCardFaceDown = cardIndex => {
    if (state.deck[cardIndex].faceUp === true) {
      dispatch({ type: SET_CARD_FACE_DOWN, payload: cardIndex });
    }
  };

  const setNumClicks = numClicks => {
    dispatch({ type: SET_NUM_CLICKS, payload: numClicks });
  };

  const setScore = score => {
    dispatch({ type: SET_SCORE, payload: score });
  };

  const setCardsClicked = cardsClicked => {
    dispatch({ type: SET_CARDS_CLICKED, payload: cardsClicked });
  };

  const setGameBoardVisible = visible => {
    dispatch({ type: SET_GAME_BOARD_VISIBLE, payload: visible });
  };

  const setGameFinished = finished => {
    dispatch({ type: SET_GAME_FINISHED, payload: finished });
  };

  const setCheatUsed = cheat => {
    dispatch({ type: SET_CHEAT_USED, payload: cheat });
  };

  const setTicks = ticks => {
    dispatch({ type: SET_TICKS, payload: ticks });
  };

  return (
    <GameContext.Provider
      value={{
        setCardsClicked,
        setNumClicks,
        setScore,
        setGameBoardVisible,
        setCardFaceUp,
        setCardFaceDown,
        setGameFinished,
        setCheatUsed,
        createNewDeck,
        setTicks,
        numClicks: state.numClicks,
        score: state.score,
        cardsClicked: state.cardsClicked,
        gameBoardVisible: state.gameBoardVisible,
        deck: state.deck,
        gameFinished: state.gameFinished,
        cheatUsed: state.cheatUsed,
        ticks: state.ticks
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
