import constants from "../constants";
import postQuery from "./services/invidAPIPost";
import query from "./services/invidAPI";
import postQueryParams from "./services/invidAPIPostParams";
import { getToken } from "../components/Global/LocalStorage/storage";

const token = getToken();

export default {
  uploadNewMovie: dataMovie => async dispatch => {
    try {
      const resp = await postQuery(`/register/upload/${token}`, dataMovie);
      console.log(resp.data);
      const result = resp.data;
      console.log(result);
      dispatch({
        type: constants.UPLOAD_MOVIE,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  fetchAllMovies: () => async dispatch => {
    try {
      const resp = await query(`/admin/allfilms/${token}`);
      console.log(resp.data);
      console.log(token);
      const result = resp.data.shortfilms;
      console.log(result);
      dispatch({
        type: constants.FETCH_ALL_MOVIES,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  enableMovie: id => async dispatch => {
    try {
      const resp = await postQueryParams(
        `/admin/film/enable/${id}/auth/${token}`
      );
      console.log(resp.data);
      const result = resp.data.shortfilms;
      console.log(result);
      dispatch({
        type: constants.ENABLE_MOVIE,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  disableMovie: id => async dispatch => {
    try {
      const resp = await postQueryParams(
        `/admin/film/disable/${id}/auth/${token}`
      );
      console.log(resp.data);
      const result = resp.data.shortfilms;
      console.log(result);
      dispatch({
        type: constants.DISABLE_MOVIE,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  deleteMovie: id => async dispatch => {
    try {
      const resp = await postQueryParams(
        `/admin/film/delete/${id}/auth/${token}`
      );
      console.log(resp.data);
      const result = resp.data.shortfilms;
      console.log(result);
      dispatch({
        type: constants.DELETE_MOVIE,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  fetchMoviesById: id => async dispatch => {
    try {
      const resp = await query(`/main/user/movies/${id}`);
      const result = resp.data.shortfilms;
      console.log(result);
      dispatch({
        type: constants.FETCH_USER_MOVIES,
        payload: result
      });
    } catch (err) {
      dispatch({
        type: constants.FETCH_INVIDAPI_ERROR,
        payload: `Error en la llamada a la API ${err}`
      });
    }
  },
  clearUserMovies: () => dispatch => {
    dispatch({
      type: constants.CLEAR_THE_MOVIE
    });
  }
};
