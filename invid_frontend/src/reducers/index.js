import { combineReducers } from "redux";

import searchReducer from "./search.reducer";
import theMovieReducer from "./theMovie.reducer";
import hompageListsReducer from "./hompageLists.reducer";
import errorReducer from "./error.reducer";
import loginReducer from "./login.reducer";
import adminReducer from "./admin.reducer";
import movieManagerReducer from "./movieManager.reducer";

const rootReducer = combineReducers({
  hompageListsReducer,
  searchReducer,
  theMovieReducer,
  loginReducer,
  adminReducer,
  movieManagerReducer,
  errorReducer
});

export default rootReducer;
