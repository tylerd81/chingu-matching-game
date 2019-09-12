import React, { useState, useEffect } from "react";
import Container from "./components/layout/Container";
import GameBoard from "./components/GameBoard";
import createDeck from "./game-items/deck";
import Scoreboard from "./components/Scoreboard";
import ControlPanel from "./components/layout/ControlPanel";
import NewGameButton from "./components/NewGameButton";

// TODO: add the PropTypes
// TODO: use context to clean this up
// TODO: make control panel look nicer
// TODO: show when the game is won
// TODO: rating for when you finish
// TODO: An "I Give Up!" button

import "./App.css";

function App() {
  const [deck, setDeck] = useState(createDeck());
  const transitionDelay = 1500; // number of miliseconds for the card flip transition

  // cardsClicked is an array used to keep track of the index of the cards that
  // are clicked.

  let [cardsClicked, setCardsClicked] = useState([]);
  let [numClicks, setNumClicks] = useState(0);
  let [score, setScore] = useState({ numMatches: 0, attempts: 0 });
  let [gameBoardVisible, setGameBoardVisible] = useState(true);

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
        setScore({ ...score, numMatches: newScore, attempts });
      } else {
        // set the flipped cards back over
        // use setTimeout() so that the CSS transition has time to finish. Otherwise
        // the state is just set right away and the second card never flips over.
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

  return (
    <Container>
      <ControlPanel>
        <h1 className="game-logo">Matching Game</h1>
        <Scoreboard matches={score.numMatches} attempts={score.attempts} />
        <NewGameButton newGameHandler={startNewGame} />
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
