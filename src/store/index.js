import { combineReducers } from "redux";
import moviesReducer from "./reducers/moviesReducer";
import tabNameReducer from "./reducers/tabNameReducer";

const rootReducer = combineReducers({
  moviesReducer,
  tabNameReducer,
});
export default rootReducer;
