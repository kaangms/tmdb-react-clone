/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedTabNameList } from "../../../store/actions/tabNameActions";
import "./style.scss";
const TabBar = ({ tabName }) => {
  const dispatch = useDispatch();

  const selectedTabNames = useSelector(
    (state) => state.tabNameReducer.selectedTabNames
  );
  function handleChangeTab(tabName, id) {
    dispatch(changeSelectedTabNameList({ tabName, id }));
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
