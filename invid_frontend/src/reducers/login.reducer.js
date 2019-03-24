import constants from "../constants";
import {
  saveToken,
  deleteToken
} from "../components/Global/LocalStorage/storage";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.LOGIN_USER:
      newState.user = action.payload;
      console.log(newState.user);
      if (Object.keys(newState.user).length !== 0) {
        saveToken(newState.user);
      }
      return newState;

    case constants.REGISTER_USER:
      newState.user = action.payload;
      console.log(newState.user);
      saveToken(newState.user);
      return newState;

    case constants.USER_LOGOUT:
      newState.user = {};
      deleteToken();
      return newState;

    default:
      return state;
  }
};
