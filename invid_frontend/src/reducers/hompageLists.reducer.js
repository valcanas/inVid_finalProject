import constants from "../constants";

const initialState = {
  animation: [],
  fantasy: [],
  horror: [],
  scifi: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  console.log(newState);
  switch (action.type) {
    case constants.FETCH_ANIMATION:
      newState.animation = action.payload;
      return newState;

    case constants.FETCH_FANTASY:
      newState.fantasy = action.payload;
      return newState;

    case constants.FETCH_HORROR:
      newState.horror = action.payload;
      return newState;

    case constants.FETCH_SCIFI:
      newState.scifi = action.payload;
      return newState;

    default:
      return state;
  }
};
