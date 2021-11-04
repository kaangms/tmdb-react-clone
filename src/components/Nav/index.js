import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  //TODO:SubMenu eklenecek
  return (
    <nav>
      <ul>
        <li className="logo"></li>
        <li>Movies</li>
        <li>Tv Shows</li>
        <li>People</li>
        <li>More</li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon id="plus" icon={faPlus} />
        </li>
        <li id="lang">TR</li>
        <li>Join TMDB</li>
        <li>
          <FontAwesomeIcon id="search" icon={faSearch} />
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
