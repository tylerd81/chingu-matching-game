import {
  SET_NUM_CLICKS,
  SET_SCORE,
  SET_CARDS_CLICKED,
  SET_GAME_BOARD_VISIBLE,
  SET_CARD_FACE_UP,
  SET_CARD_FACE_DOWN,
  SET_DECK
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_NUM_CLICKS:
      return {
        ...state,
        numClicks: action.payload
      };

    case SET_SCORE:
      return {
        ...state,
        score: action.payload
      };

    case SET_CARDS_CLICKED:
      return {
        ...state,
        cardsClicked: action.payload
      };

    case SET_GAME_BOARD_VISIBLE:
      return {
        ...state,
        gameBoardVisible: action.payload
      };

    case SET_CARD_FACE_UP: {
      const cardIndex = action.payload;
      const updatedDeck = [...state.deck];
      updatedDeck[cardIndex].faceUp = true;

      return {
        ...state,
        deck: updatedDeck
      };
    }

    case SET_CARD_FACE_DOWN: {
      const cardIndex = action.payload;
      const updatedDeck = [...state.deck];
      updatedDeck[cardIndex].faceUp = false;

      return {
        ...state,
        deck: updatedDeck
      };
    }

    case SET_DECK:
      return {
        ...state,
        deck: action.payload
      };

    default:
      console.log("default reducer function");
      return state;
  }
};
