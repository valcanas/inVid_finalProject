import constants from "../constants";
import query from "./services/invidAPI";

export default {
  fetchScifi: () => async dispatch => {
    try {
      const resp = await query("/main/auth/scifi");
      console.log(resp.data.shortfilms);
      const results = resp.data.shortfilms;
      console.log(results);
      dispatch({
        type: constants.FETCH_SCIFI,
        payload: results
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  fetchFantasy: () => async dispatch => {
    try {
      const resp = await query("/main/auth/fantasy");
      const results = resp.data.shortfilms;
      dispatch({
        type: constants.FETCH_FANTASY,
        payload: results
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  fetchHorror: () => async dispatch => {
    try {
      const resp = await query("/main/auth/horror");
      const results = resp.data.shortfilms;
      dispatch({
        type: constants.FETCH_HORROR,
        payload: results
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  fetchAnimation: () => async dispatch => {
    try {
      const resp = await query("/main/auth/animation");
      const results = resp.data.shortfilms;
      dispatch({
        type: constants.FETCH_ANIMATION,
        payload: results
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  }
};
