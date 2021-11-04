import { combineReducers } from "redux";
import getMoviesReducer from "./getMoviesReducer";

const rootReducer = combineReducers({
  getMoviesReducer,
});
export default rootReducer;
