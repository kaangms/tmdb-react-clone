/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSelectedTabNameList } from "../../../store/actions/tabNameActions";
import { initialState } from "../../../store/reducers/tabNameReducer";
import "./style.scss";
const TabBar = ({ tabName }) => {
  const dispatch = useDispatch();

  const [selectedTabNames, setSelectedTabNames] = useState(
    initialState.selectedTabNames
  );

  function handleChangeTab(tabName, id) {
    changeSelectedTabNames(selectedTabNames, id, tabName);
    let newSelectedTabNames = [...selectedTabNames];
    console.log(newSelectedTabNames);
    setSelectedTabNames(newSelectedTabNames);
    dispatch(changeSelectedTabNameList(newSelectedTabNames));
  }
  return (
    <div className="tabbar-zone">
      <div className="column-header">
        <h4>{tabName.tabExplain}</h4>
        <div className="filmSection-parents">
          {tabName.parents.map((parent) => (
            <span
              key={parent.name}
              className={
                selectedTabNames.includes(parent.name) ? "active" : "active-non"
              }
            >
              <a onClick={() => handleChangeTab(parent.name, tabName.id)}>
                {parent.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TabBar;
function changeSelectedTabNames(selectedTabNames, id, tabName) {
  selectedTabNames.splice(
    selectedTabNames.indexOf(selectedTabNames[id - 1]),
    1,
    tabName
  );
}
