import constants from "../constants";

const initialState = {
  movieTarget: {},
  allMovies: [],
  userMovies: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.UPLOAD_MOVIE:
      newState.movieTarget = action.payload;
      console.log(newState.movieTarget);
      return newState;

    case constants.FETCH_ALL_MOVIES:
      newState.allMovies = action.payload;
      console.log(newState.allMovies);
      return newState;

    case constants.ENABLE_MOVIE:
      newState.allMovies = action.payload;
      console.log(newState.allMovies);
      return newState;

    case constants.DISABLE_MOVIE:
      newState.allMovies = action.payload;
      console.log(newState.allMovies);
      return newState;

    case constants.DELETE_MOVIE:
      newState.allMovies = action.payload;
      console.log(newState.allMovies);
      return newState;

    case constants.FETCH_USER_MOVIES:
      newState.userMovies = action.payload;
      return newState;

    case constants.CLEAR_USER_MOVIES:
      newState.userMovies = [];
      return newState;

    default:
      return state;
  }
};
