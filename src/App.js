import React, { useState, useEffect, useContext } from "react";
import Container from "./components/layout/Container";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";
import ControlPanel from "./components/layout/ControlPanel";
import SolveItButton from "./components/SolveItButton";
import GameOverDialog from "./components/GameOverDialog";
import GameContext from "./context/gameContext";
import GameTimer from "./components/GameTimer";

import "./App.css";

function App() {
  const transitionDelay = 1500; // number of miliseconds for the card flip transition

  const [ticks, setTicks] = useState(0);
  const [timerId, setTimerId] = useState();

  const gameContext = useContext(GameContext);
  const {
    setScore,
    setNumClicks,
    setCardsClicked,
    setGameBoardVisible,
    setCardFaceUp,
    setCardFaceDown,
    setGameFinished,
    setCheatUsed,
    createNewDeck,
    numClicks,
    score,
    cardsClicked,
    gameBoardVisible,
    deck,
    gameFinished
  } = gameContext;

  // setup the timer
  const timerTick = () => {
    setTicks(ticks => ticks + 1);
  };

  const startTimer = () => {
    const t = setInterval(timerTick, 1000);
    setTimerId(t);
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };

  const resetTimer = () => {
    setTicks(0);
  };

  // eslint-disable-next-line
  useEffect(() => startTimer(), []);

  // check for a match after 2 cards are clicked

  useEffect(() => {
    if (numClicks === 2) {
      checkForMatch();
    }

    if (score.numMatches === 8) {
      setGameFinished(true);
      stopTimer();
    }
    // eslint-disable-next-line
  }, [numClicks, score]);

  // Handler for when a card is clicked. It increments the number of clicks
  // and then flips over the clicked card.
  const cardClick = cardIndex => {
    //check if card is already flipped over: if so just return
    if (deck[cardIndex].faceUp === true) {
      return;
    }
    setCardFaceUp(cardIndex);
    setNumClicks(numClicks + 1);
    setCardsClicked([...cardsClicked, cardIndex]);
  };

  const checkForMatch = () => {
    // add an attempt every two clicks
    const attempts = numClicks % 2 === 0 ? score.attempts + 1 : score.attempts;
    if (numClicks === 2) {
      const firstCard = deck[cardsClicked[0]];
      const secondCard = deck[cardsClicked[1]];

      if (firstCard.value === secondCard.value) {
        setScore({ numMatches: score.numMatches + 1, attempts });
      } else {
        // set the flipped cards back over
        // use setTimeout() so that the CSS transition has time to finish.
        // When the second card is clicked it should start the css transition, but
        // if the state changes too fast the transition never finishes.

        setTimeout(() => {
          setCardFaceDown(cardsClicked[0]);
          setCardFaceDown(cardsClicked[1]);
        }, transitionDelay);
        setScore({ ...score, attempts });
      }
      setNumClicks(0);
      setCardsClicked([]);
    }
  };

  const startNewGame = () => {
    setGameBoardVisible(false); // hide the board while shuffling
    setGameFinished(false);
    resetNumClicks();
    createNewDeck();
    resetScore();
    resetTimer();
    startTimer();
    setCheatUsed(false);
    setTimeout(() => setGameBoardVisible(true), 500); // reshow the board
  };

  const resetScore = () => {
    setScore({ numMatches: 0, attempts: 0 });
  };

  const resetNumClicks = () => {
    setCardsClicked([]);
    setNumClicks(0);
  };

  const solveGame = () => {
    setCheatUsed(true);
    stopTimer();

    let cardIndex = 0;
    const solveDelay = 700; // milliseconds

    // set an interval to flip each pair over. Once the end of the
    // deck is reached, the timer will be killed.

    const timerId = setInterval(() => {
      if (cardIndex === deck.length) {
        setGameFinished(true);
        clearInterval(timerId);
      } else {
        let done = false;
        while (!done && cardIndex < deck.length) {
          let card = deck[cardIndex];

          // check if the card is not face up
          if (typeof card !== "undefined" && !card.faceUp) {
            done = true; // found a card that is not face up

            //flip this card over and find its match
            let matchIndex = 0; //cardIndex + 1;
            let found = false;

            while (matchIndex < deck.length && !found) {
              if (
                deck[cardIndex].value === deck[matchIndex].value &&
                cardIndex !== matchIndex
              ) {
                found = true;
              } else {
                matchIndex++;
              }
            }

            if (found) {
              setCardFaceUp(matchIndex);
              setCardFaceUp(cardIndex);
            }
            cardIndex++;
          } else {
            cardIndex++; // card was not face down, so go to the next card
          }
        }
      }
    }, solveDelay);
  };

  return (
    <Container>
      <ControlPanel>
        <Scoreboard matches={score.numMatches} attempts={score.attempts} />
        <GameTimer ticks={ticks} />
        <SolveItButton clickHandler={solveGame} />
      </ControlPanel>
      <GameBoard
        deck={deck}
        cardClickHandler={cardClick}
        visible={gameBoardVisible}
      />
      {gameFinished ? (
        <GameOverDialog ticks={ticks} newGameHandler={startNewGame} />
      ) : null}
    </Container>
  );
}

export default App;
