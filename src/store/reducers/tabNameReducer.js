import * as actionTypes from "../actions/tabNameActions";

export default function tabNameReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TAB_NAME_LIST:
      return action.payload;
    // case actionTypes.GET_SELECTED_TAB_NAME:
    //   return action.payload;
    default:
      return state;
  }
}
export const initialState = {
  selectedTabNames: ["Streaming", "Movies", "Today"],
  currentTabNames: [
    {
      id: 1,
      tabExplain: "What's Popular",
      parents: {
        id: 1,
        name: "Streaming",
      },
    },
    {
      id: 2,
      tabExplain: "Free To Watch",
      parent: {
        id: 1,
        name: "Movies",
      },
    },
    {
      id: 3,
      tabExplain: "Trending",
      parent: {
        id: 1,
        name: "Today",
      },
    },
  ],
  tabNames: [
    {
      id: 1,
      tabExplain: "What's Popular",
      parents: [
        {
          id: 1,
          name: "Streaming",
        },
        {
          id: 2,
          name: "On Tv",
        },
        { id: 3, name: "For Rent" },
        {
          id: 4,
          name: "In Theaters",
        },
      ],
    },
    {
      id: 2,
      tabExplain: "Free To Watch",
      parents: [
        {
          id: 1,
          name: "Movies",
        },
        {
          id: 2,
          name: "TV",
        },
      ],
    },
    {
      id: 3,
      tabExplain: "Trending",
      parents: [
        {
          id: 1,
          name: "Today",
        },
        {
          id: 2,
          name: "This Week",
        },
      ],
    },
  ],
};
