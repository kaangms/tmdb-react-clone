/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./style.scss";
const TabBar = ({ tabNames, getMovies }) => {
  const [tabNamesState, setTabNamesState] = useState({ tabNames });

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
