import constants from "../constants";
import {
  saveToken,
  deleteToken
} from "../components/Global/LocalStorage/storage";

const initialState = {
  admin: {}
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.LOGIN_ADMIN:
      newState.admin = action.payload;
      console.log(newState.admin);
      if (Object.keys(newState.admin).length !== 0) {
        saveToken(newState.admin);
      }
      return newState;

    case constants.ADMIN_LOGOUT:
      newState.admin = {};
      deleteToken();
      return newState;

    default:
      return state;
  }
};
