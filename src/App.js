import React, { useState } from "react";
import Container from "./components/layout/Container";
import GameBoard from "./components/GameBoard";
import Deck from "./game-items/deck";

import "./App.css";

function App() {
  const gameDeck = new Deck(); // should just change to use a deck creating function and forget the oop stuff
  const [cards, setCards] = useState(gameDeck.cards);

  const cardClick = cardIndex => {
    console.log(`card ${cardIndex} clicked`);
    gameDeck.cards[cardIndex].flip();
    setCards(gameDeck.cards);
  };

  return (
    <Container>
      <h1 className="game-logo">Matching Game</h1>
      <GameBoard cards={cards} cardClickHandler={cardClick} />
    </Container>
  );
}

export default App;
