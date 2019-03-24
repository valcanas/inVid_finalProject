import constants from "../constants";
import query from "./services/invidAPI";

export default {
  fetchTheMovie: movieId => async dispatch => {
    try {
      const resp = await query(`/main/auth/movie/${movieId}`);
      console.log(resp.data.shortfilms);
      const result = resp.data.shortfilms;
      console.log(result);
      dispatch({
        type: constants.FETCH_THEMOVIE,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  clearTheMovie: () => dispatch => {
    dispatch({
      type: constants.CLEAR_THE_MOVIE
    });
  },
  clearSearchResult: () => dispatch => {
    dispatch({
      type: constants.CLEAR_SEARCH_RESULT
    });
  }
};
