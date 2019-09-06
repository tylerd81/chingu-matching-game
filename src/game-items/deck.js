import Card from "./card";

// replace the strings with the actual image names

const images = [
  "pumpkin",
  "blackcat",
  "witch",
  "ghost",
  "bat",
  "candycorn",
  "mask",
  "zombie"
];
class Deck {
  constructor() {
    this.cards = [];

    images.forEach((image, index) => {
      //create two cards for each different image
      this.cards.push(new Card(image, index));
      this.cards.push(new Card(image, index));
    });
  }
}

export default Deck;
