import { SET_NUM_CLICKS } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_NUM_CLICKS:
      console.log("Setting number of clicks");
      return {
        ...state,
        numClicks: action.payload
      };
    default:
      console.log("default reducer function");
      return state;
  }
};
