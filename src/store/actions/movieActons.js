export const ADD_TO_THUMB_LIST = "ADD_TO_THUMB_LIST";
export const REMOVE_FROM_THUMB_LIST = "REMOVE_FROM_THUMB_LIST";

export function addToThumbList(movie) {
  return {
    type: ADD_TO_THUMB_LIST,
    payload: movie,
  };
}
export function removeFromThumbList(movie) {
  return {
    type: REMOVE_FROM_THUMB_LIST,
    payload: movie,
  };
}
