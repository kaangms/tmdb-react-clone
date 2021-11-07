export const SET_TO_THUMB_LIST = "SET_TO_THUMB_LIST";

export function setToThumbList(movie) {
  return {
    type: SET_TO_THUMB_LIST,
    payload: movie,
  };
}
