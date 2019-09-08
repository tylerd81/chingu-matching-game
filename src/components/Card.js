import React from "react";

const Card = ({ image, faceUp, cardClickHandler, index }) => {
  const clicked = () => cardClickHandler(index);
  console.log(image);

  if (faceUp) {
    return (
      <div onClick={clicked} className="card card-face-up">
        <img className="card-face-up-image" src={image} />
      </div>
    );
  } else {
    return (
      <div onClick={clicked} className="card card-face-down">
        <h3>Card</h3>
      </div>
    );
  }
};

export default Card;
