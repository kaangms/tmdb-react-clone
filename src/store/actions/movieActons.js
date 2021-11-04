import * as actionTypes from "./actionTypes";

export function getMovies(movies) {
  return { type: actionTypes.GET_MOVIE_LIST, payload: movies };
}
