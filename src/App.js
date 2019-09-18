import React, { useState, useEffect, useContext } from "react";
import Container from "./components/layout/Container";
import GameBoard from "./components/GameBoard";
import createDeck from "./game-items/deck";
import Scoreboard from "./components/Scoreboard";
import ControlPanel from "./components/layout/ControlPanel";
import NewGameButton from "./components/NewGameButton";
import ScoreLevel from "./components/ScoreLevel";
import SolveItButton from "./components/SolveItButton";

import GameContext from "./context/gameContext";

// TODO: add the PropTypes
// TODO: use context to clean this up
// TODO: make control panel look nicer
// TODO: show when the game is won
// TODO: rating for when you finish
// TODO: Add a finished game screen - move new game button there.
// TODO: Add timer

import "./App.css";

function App() {
  const [deck, setDeck] = useState(createDeck());
  const transitionDelay = 1500; // number of miliseconds for the card flip transition

  // cardsClicked is an array used to keep track of the index of the cards that
  // are clicked.

  // let [cardsClicked, setCardsClicked] = useState([]);
  //let [numClicks, setNumClicks] = useState(0);
  // let [score, setScore] = useState({ numMatches: 0, attempts: 0 });
  let [gameBoardVisible, setGameBoardVisible] = useState(true);
  let [gameFinished, setGameFinished] = useState(false);

  // Start of new context stuff -- move all useState() to context
  const gameContext = useContext(GameContext);
  const {
    numClicks,
    setNumClicks,
    setScore,
    score,
    setCardsClicked,
    cardsClicked
  } = gameContext;

  // check for a match after 2 cards are clicked
  useEffect(() => {
    if (numClicks === 2) {
      checkForMatch();
    }
  }, [numClicks]);

  // Handler for when a card is clicked. It increments the number of clicks
  // and then flips over the clicked card.
  const cardClick = cardIndex => {
    //check if card is already flipped over: if so just return
    if (deck[cardIndex].faceUp === true) {
      return;
    }

    const updatedDeck = [...deck];
    updatedDeck[cardIndex].faceUp = true;

    setDeck(updatedDeck);
    setNumClicks(numClicks + 1);
    setCardsClicked([...cardsClicked, cardIndex]);
  };

  const checkForMatch = () => {
    const attempts = numClicks % 2 === 0 ? score.attempts + 1 : score.attempts; // add an attempt every two clicks
    console.log(attempts);
    console.log(score);
    if (numClicks === 2) {
      const firstCard = deck[cardsClicked[0]];
      const secondCard = deck[cardsClicked[1]];

      if (firstCard.value === secondCard.value) {
        console.log("Cards Are A Match!");
        const newScore = score.numMatches + 1;
        setScore({ numMatches: newScore, attempts });
      } else {
        // set the flipped cards back over
        // use setTimeout() so that the CSS transition has time to finish.
        // When the second card is clicked it should start the css transition, but
        // if the state changes too fast the transition never finishes)

        setTimeout(() => {
          const updatedDeck = [...deck];
          updatedDeck[cardsClicked[0]].faceUp = false;
          updatedDeck[cardsClicked[1]].faceUp = false;
          setDeck(updatedDeck);
        }, transitionDelay);
        setScore({ ...score, attempts });
      }
      setNumClicks(0);
      setCardsClicked([]);
    }
  };

  const startNewGame = () => {
    setGameBoardVisible(false);
    resetNumClicks();
    setDeck(createDeck());
    resetScore();
    setTimeout(() => setGameBoardVisible(true), 500);
  };

  const resetScore = () => {
    setScore({ numMatches: 0, attempts: 0 });
  };

  const resetNumClicks = () => {
    setCardsClicked([]);
    setNumClicks(0);
  };

  const solveGame = () => {
    let cardIndex = 0;
    const solveDelay = 700; // milliseconds

    // set an interval to flip each pair over. Once the end of the
    // deck is reached, the timer will be killed.

    const timerId = setInterval(() => {
      if (cardIndex === deck.length) {
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
              const updatedDeck = [...deck];
              updatedDeck[matchIndex].faceUp = true;
              updatedDeck[cardIndex].faceUp = true;
              setDeck(updatedDeck);
            }
            cardIndex++;
          } else {
            cardIndex++; // card was not face down, so go to the next card
          }
        }
      }
    }, solveDelay);
    console.log("Solving game");
  };

  return (
    <Container>
      <ControlPanel>
        <Scoreboard matches={score.numMatches} attempts={score.attempts} />
        <ScoreLevel attempts={score.attempts} />
        <NewGameButton newGameHandler={startNewGame} />
        <SolveItButton clickHandler={solveGame} />
      </ControlPanel>
      <GameBoard
        deck={deck}
        cardClickHandler={cardClick}
        visible={gameBoardVisible}
      />
    </Container>
  );
}

export default App;
