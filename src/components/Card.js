import React from "react";

const Card = ({ image, faceUp, cardClickHandler, index }) => {
  const clicked = () => cardClickHandler(index);

  return (
    <div onClick={clicked} className="card">
      {faceUp ? <h3>{image}</h3> : <h3>Card</h3>}
    </div>
  );
};

export default Card;
