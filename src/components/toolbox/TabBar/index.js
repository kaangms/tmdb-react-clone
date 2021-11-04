/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";
const TabBar = ({ tabName, getMovies }) => {
  // console.log(tabNamesState.columnName);
  return (
    <div className="tabbar-zone">
      <div className="column-header">
        <h4>{tabName.tabExplain}</h4>
        <div className="filmSection-parents">
          {tabName.parents.map((parent) => (
            <span
              key={parent.name}
              //TODO:Aktif olan ayrı olarak tutulacak.Düzenlenecek kısım
              className={parent === "For Rent" ? "active" : "active-non"}
            >
              <a> {parent.name}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TabBar;
