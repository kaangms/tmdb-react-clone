// export const GET_TAB_NAME = "GET_TAB_NAME";
export const CHANGE_TAB_NAME_LIST = "CHANGE_TAB_NAME_LIST";
export const GET_SELECT_TAB_NAME = "GET_SELECT_TAB_NAME";

// export function getTabNames(tabNames) {
//   return { type: GET_TAB_NAME, payload: tabNames };
// }
export function changeSelectedTabNameList(currentTabNames) {
  return { type: CHANGE_TAB_NAME_LIST, payload: currentTabNames };
}
export function getSelectTabNames() {
  return { type: GET_SELECT_TAB_NAME };
}
