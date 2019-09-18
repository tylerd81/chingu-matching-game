import { SET_NUM_CLICKS, SET_SCORE, SET_CARDS_CLICKED } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_NUM_CLICKS:
      console.log("Setting number of clicks");
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

    default:
      console.log("default reducer function");
      return state;
  }
};
