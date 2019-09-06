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

function createDeck() {
  const cards = [];
  // let value = 0;
  // images.forEach((image, index) => {
  //   //create two cards for each different image
  //   cards.push({ image, value, index, faceUp: false });
  //   if (index % 2 === 0) {
  //     value++; // change the value every two cards
  //   }
  // });

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
