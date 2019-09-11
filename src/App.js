import React, { useState, useEffect } from "react";
import Container from "./components/layout/Container";
import GameBoard from "./components/GameBoard";
import createDeck from "./game-items/deck";

// TODO: add the PropTypes

import "./App.css";

function App() {
  const gameDeck = createDeck();
  const [deck, setDeck] = useState(gameDeck);
  const transitionDelay = 1500; // number of miliseconds for the card flip transition

  // cardsClicked is an array used to keep track of the index of the cards that
  // are clicked.

  // TODO: change cardsClicked to an object: {firstClick:1, secondClick:5} instead
  // of using an array.

  let [cardsClicked, setCardsClicked] = useState([]);
  let [numClicks, setNumClicks] = useState(0);

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

    console.log(`card ${cardIndex} clicked`);
    const updatedDeck = deck.map(card => {
      if (card.index === cardIndex) {
        card.faceUp = !card.faceUp;
      }
      return card;
    });
    setDeck(updatedDeck);
    setNumClicks(numClicks + 1);
    setCardsClicked([...cardsClicked, cardIndex]);
  };

  const checkForMatch = () => {
    console.log(cardsClicked);
    if (numClicks === 2) {
      const firstCard = deck[cardsClicked[0]];
      const secondCard = deck[cardsClicked[1]];

      if (firstCard.value === secondCard.value) {
        console.log("Cards Are A Match!");
      } else {
        //set the flipped cards back over
        // use setTimeout() so that the CSS transition has time to finish. Otherwise
        // the state is just set right away and the second card never flips over.
        setTimeout(() => {
          setDeck(
            deck.map(card => {
              if (
                card.index === firstCard.index ||
                card.index === secondCard.index
              ) {
                card.faceUp = false;
              }
              return card;
            })
          );
        }, transitionDelay);
      }
      setNumClicks(0);
      setCardsClicked([]);
    }
  };

  return (
    <Container>
      <h1 className="game-logo">Matching Game</h1>
      <GameBoard deck={deck} cardClickHandler={cardClick} />
    </Container>
  );
}

export default App;
