import React from "react";
import Card from "./Card";

const GameBoard = ({ deck, cardClickHandler, visible }) => {
  if (!visible) {
    return (
      <div className="game-board game-board-hidden">
        <p>Shuffling...</p>
      </div>
    );
  }

  const cards = deck.map((card, index) => {
    return (
      <Card
        key={index}
        cardClickHandler={cardClickHandler}
        index={index}
        image={card.image}
        faceUp={card.faceUp}
      />
    );
  });

  return <div className="game-board">{cards}</div>;
};

export default GameBoard;
