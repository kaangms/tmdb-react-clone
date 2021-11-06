import * as actionTypes from "../actions/tabNameActions";

export default function tabNameReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TAB_NAME_LIST:
      return action.payload;
    case actionTypes.GET_SELECT_TAB_NAME:
      return state;
    default:
      return state;
  }
}
export const initialState = {
  selectedTabNames: ["Streaming", "Movies", "Today"],
};
export const tabNames = [
  {
    id: 1,
    tabExplain: "What's Popular",
    parents: [
      {
        name: "Streaming",
      },
      {
        name: "On Tv",
      },
      {
        name: "For Rent",
      },
      {
        name: "In Theaters",
      },
    ],
  },
  {
    id: 2,
    tabExplain: "Free To Watch",
    parents: [
      {
        name: "Movies",
      },
      {
        name: "TV",
      },
    ],
  },
  {
    id: 3,
    tabExplain: "Trending",
    parents: [
      {
        name: "Today",
      },
      {
        name: "This Week",
      },
    ],
  },
];
