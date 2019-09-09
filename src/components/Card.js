import React from "react";

const Card = ({ image, faceUp, cardClickHandler, index }) => {
  const clicked = () => cardClickHandler(index);

  /*
    The card flip is based on the tutorial from 
    https://3dtransforms.desandro.com/card-flip
  */
  return (
    <div className="card" onClick={clicked}>
      <div className={faceUp ? "card-face" : "card-face card-flipped"}>
        Front
      </div>
      <div className={faceUp ? "card-face card-flipped" : "card-face"}>
        Back
      </div>
    </div>
  );

  // if (faceUp) {
  //   return (
  //     <div onClick={clicked} className="card card-face-up">
  //       <img className="card-face-up-image" src={image} />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div onClick={clicked} className="card card-face-down">
  //       <h3>Card</h3>
  //     </div>
  //   );
  // }
};

export default Card;
