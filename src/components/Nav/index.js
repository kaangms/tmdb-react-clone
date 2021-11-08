import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  //TODO:SubMenu eklenecek

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 479px)" });
  console.log(isTabletOrMobile);
  return (
    <nav>
      <ul>
        <li className="logo"></li>
        {!isTabletOrMobile && <li>Movies</li>}
        {!isTabletOrMobile && <li>Tv Shows</li>}
        {!isTabletOrMobile && <li>People</li>}
        {!isTabletOrMobile && <li>More</li>}
      </ul>

      {!isTabletOrMobile && navForDesktop()}
    </nav>
  );
};
export default Nav;

function navForDesktop() {
  return (
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
  );
}
