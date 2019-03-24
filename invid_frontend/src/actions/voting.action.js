import constants from "../constants";
import postQuery from "./services/invidAPIPost";
import query from "./services/invidAPI";
import postQueryParams from "./services/invidAPIPostParams";
import { getToken } from "../components/Global/LocalStorage/storage";

const token = getToken();

export default {
  voteMovie: dataVOte => async dispatch => {
    try {
      const resp = await postQuery(`/register/upload/${token}`, dataMovie);
      console.log(resp.data);
      const result = resp.data;
      console.log(result);
      dispatch({
        type: constants.VOTE_MOVIE,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  fetchMovieVotes: () => async dispatch => {
    try {
      const resp = await query(`/admin/allfilms/${token}`);
      console.log(resp.data);
      console.log(token);
      const result = resp.data.shortfilms;
      console.log(result);
      dispatch({
        type: constants.FETCH_MOVIES_VOTES,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  }
};
