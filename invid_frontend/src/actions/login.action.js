import constants from "../constants";
import postQuery from "./services/invidAPIPost";
import query from "./services/invidAPI";

export default {
  fetchLoginUser: dataLogin => async dispatch => {
    try {
      const resp = await postQuery(`/main/auth/login`, dataLogin);
      console.log(resp.data);
      const result = resp.data;
      console.log(result);
      dispatch({
        type: constants.LOGIN_USER,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  registerUser: dataRegister => async dispatch => {
    try {
      const resp = await postQuery(`/register/post`, dataRegister);
      console.log(resp.data);
      const result = resp.data;
      console.log(result);
      dispatch({
        type: constants.REGISTER_USER,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  userLogOut: () => dispatch => {
    dispatch({
      type: constants.USER_LOGOUT
    });
  }
};
