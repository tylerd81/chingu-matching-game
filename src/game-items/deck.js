// replace the strings with the actual image names
import eye from "../images/eye_large.png";
import red_needle from "../images/red_needle_large.png";
import green_needle from "../images/green_needle_large.png";
//TODO: is import the right way for this?

const images = [
  eye,
  red_needle,
  green_needle,
  eye,
  eye,
  eye,
  eye,
  eye
  // "pumpkin",
  // "blackcat",
  // "witch",
  // "ghost",
  // "bat",
  // "candycorn",
  // "mask",
  // "zombie"
];

// the deck is an array of objects of the form:
// { image, value, index, faceUp }
// index is the position of the card in the array.

// value is the actual value of the card that is used to determine if
// two cards match. There are two of each card in the deck, so there are
// always two cards with the same value.

function createDeck() {
  const cards = [];

  let cardIndex = 0;
  let cardValue = 0;

  for (let i = 0; i < images.length; i++) {
    // add two of the same cards at a time
    cards.push(
      {
        image: images[i],
        value: cardValue,
        index: cardIndex++,
        faceUp: false
      },
      {
        image: images[i],
        value: cardValue,
        index: cardIndex++,
        faceUp: false
      }
    );
    cardValue++;
  }

  return cards;
}

export default createDeck;
