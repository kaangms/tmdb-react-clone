import React from "react";
import "./style.scss";

const HeaderBottom = () => {
  return (
    <div>
      <div className="background-img">
        <h1>Welcome</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <form>
          <input
            type="text"
            placeholder="Search for a movie,tv,show,person....."
            name="search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};
export default HeaderBottom;
