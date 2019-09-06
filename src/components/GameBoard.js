import React from "react";
import Card from "./Card";

const GameBoard = ({ cards, cardClickHandler }) => {
  const gameCards = cards.map((card, index) => {
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

  return <div className="game-board">{gameCards}</div>;
};

export default GameBoard;
