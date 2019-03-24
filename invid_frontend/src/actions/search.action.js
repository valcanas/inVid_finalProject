import constants from "../constants";
import postQuery from "./services/invidAPIPost";
import query from "./services/invidAPI";
import postQueryParams from "./services/invidAPIPostParams";
import { getToken } from "../components/Global/LocalStorage/storage";

export default {
  searchShortfilm: searchInput => async dispatch => {
    try {
      const resp = await postQuery(`/search/shortfilm`, searchInput);
      console.log(resp.data);
      console.log(searchInput);
      const result = resp.data;
      console.log(result);
      dispatch({
        type: constants.FETCH_SEARCH,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  clearSearch: () => dispatch => {
    dispatch({
      type: constants.CLEAR_SEARCH_RESULT
    });
  }
};
