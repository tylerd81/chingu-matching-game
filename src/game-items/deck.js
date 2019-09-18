const images = ["😀", "😂", "😋", "😎", "😍", "😴", "🤔", "🙄"];

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
        faceUp: false
      },
      {
        image: images[i],
        value: cardValue,
        faceUp: false
      }
    );
    cardValue++;
  }

  return shuffle(cards);
}

function shuffle(deck) {
  const cards = [...deck];

  let count = cards.length;

  while (count > 0) {
    let rand = Math.floor(Math.random() * count);
    let temp = cards[rand];
    cards[rand] = cards[count - 1]; //move last item into chosen spot
    cards[count - 1] = temp; // move chosen item to end of array
    count--;
  }
  return cards;
}
export default createDeck;
