import * as actionTypes from "../actions/movieActons";

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TO_THUMB_LIST:
      let movie = initialState.thumbList.find(
        (m) => m.id === action.payload.id
      );
      if (movie !== undefined) {
        initialState.thumbList = initialState.thumbList.filter(
          (m) => m.id !== action.payload.id
        );
      } else {
        initialState.thumbList.push({
          id: action.payload.id,
          status: action.payload.status,
        });
      }
      return state;

    default:
      return state;
  }
}
export const initialState = {
  thumbList: [],
};
