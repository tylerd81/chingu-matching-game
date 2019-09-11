import React from "react";

const Card = ({ image, faceUp, cardClickHandler, index }) => {
  const clicked = () => cardClickHandler(index);

  /*
    The card flip is based on the tutorial from 
    https://3dtransforms.desandro.com/card-flip
  */

  return (
    <div className="card" onClick={clicked}>
      <div
        className={
          faceUp ? "card-face card-front" : "card-face card-front card-flipped"
        }
      >
        Front
      </div>
      <div
        className={
          faceUp ? "card-face card-back card-flipped" : "card-face card-back"
        }
      >
        Back
      </div>
    </div>
  );
};

export default Card;
