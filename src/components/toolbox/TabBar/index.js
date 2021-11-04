/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";
const TabBar = ({ tabNames, getMovies }) => {
  // console.log(tabNamesState.columnName);
  return (
    <div className="tabbar-zone">
      <div className="column-header">
        <h4>{tabNames.columnName}</h4>
        <div className="filmSection-parents">
          {tabNames.parents.map((parent) => (
            <span
              //TODO:Aktif olan ayrı olarak tutulacak.Düzenlenecek kısım
              className={parent === "For Rent" ? "active" : "active-non"}
            >
              <a> {parent}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TabBar;
