import * as actionTypes from "../actions/movieActons";

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_THUMB_LIST:
      var movie = initialState.thumbList.find(
        (m) => m.id === action.payload.id
      );
      console.log(state);
      if (movie !== undefined) {
        return {
          ...state,
          thumbList: [...initialState.thumbList],
        };
      } else {
        return {
          ...state,
          thumbList: [...state.thumbList, action.payload],
        };
      }
    case actionTypes.REMOVE_FROM_THUMB_LIST:
      return {
        ...state,
        thumbList: state.thumbList.filter((m) => m.id !== action.payload.id),
      };

    default:
      return state;
  }
}
export const initialState = {
  thumbList: [],
};
