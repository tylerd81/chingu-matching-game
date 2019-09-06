class Card {
  constructor(image, value) {
    // value will be used to check if two cards match.
    // there should be two of each card in the deck so two cards will have the same value.
    this.image = image;
    this.value = value;
    this.faceUp = false;
  }

  flip() {
    console.log("flipping");
    this.faceUp = !this.faceUp;
  }
}

export default Card;
