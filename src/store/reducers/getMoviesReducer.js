import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getMoviesReducer(
  state = initialState.currentMovies,
  action
) {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST:
      return action.payload;
    default:
      return state;
  }
}
