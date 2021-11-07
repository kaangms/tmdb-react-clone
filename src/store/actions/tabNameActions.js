// export const GET_TAB_NAME = "GET_TAB_NAME";
export const CHANGE_TAB_NAME_LIST = "CHANGE_TAB_NAME_LIST";
export const GET_SELECTED_TAB_NAME = "GET_SELECTED_TAB_NAME";

// export function getTabNames(tabNames) {
//   return { type: GET_TAB_NAME, payload: tabNames };
// }
export function changeSelectedTabNameList(changeParam) {
  return { type: CHANGE_TAB_NAME_LIST, payload: changeParam };
}
export function getSelectedTabNames() {
  return { type: GET_SELECTED_TAB_NAME };
}
