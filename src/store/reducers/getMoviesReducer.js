import * as actionTypes from "../actions/movieActons";

export default function getMoviesReducer(
  state = initialState.currentMovies,
  action
) {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST:
      return action.payload;
    case actionTypes.GET_THUMB_LIST:
      return action.payload;
    default:
      return state;
  }
}
export const initialState = {
  currentMovies: [],
  thumbList: [],
};
