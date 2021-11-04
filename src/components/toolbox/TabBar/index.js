/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
const TabBar = ({ filmSection, isSelected }) => {
  return (
    <div className="tabbar-zone">
      <div className="column-header">
        <h4>{filmSection.columnName}</h4>
        <div className="filmSection-parents">
          {filmSection.parents.map((parent) => (
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
