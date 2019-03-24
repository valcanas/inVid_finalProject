import constants from "../constants";
import postQuery from "./services/invidAPIPost";
import query from "./services/invidAPI";

export default {
  fetchLoginAdmin: dataAdmin => async dispatch => {
    try {
      const resp = await postQuery(`/admin/film/`, dataAdmin);
      console.log(resp.data);
      const result = resp.data;
      console.log(result);
      dispatch({
        type: constants.LOGIN_ADMIN,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  adminLogOut: () => dispatch => {
    dispatch({
      type: constants.ADMIN_LOGOUT
    });
  }
};
