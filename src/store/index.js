import { combineReducers } from "redux";
import getMoviesReducer from "./reducers/getMoviesReducer";
import tabNameReducer from "./reducers/tabNameReducer";

const rootReducer = combineReducers({
  getMoviesReducer,
  tabNameReducer,
});
export default rootReducer;
