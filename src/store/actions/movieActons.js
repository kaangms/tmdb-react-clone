export const CHANGE_MOVIE_LIST = "CHANGE_MOVIE_LIST";
export const GET_MOVIE_LIST = "GET_MOVIE_LIST";
export const GET_THUMB_LIST = "GET_THUMB_LIST";

export function getMovies(movies) {
  return { type: GET_MOVIE_LIST, payload: movies };
}
export function getThumbList(thumbList) {
  return { type: GET_THUMB_LIST, payload: thumbList };
}
