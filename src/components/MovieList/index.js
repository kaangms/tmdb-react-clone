/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { initialState } from "../../store/reducers/tabNameReducer";
import MovieCard from "../MovieCard";
import TabBar from "../toolbox/TabBar";
import "./style.scss";

const MovieList = () => {
  return (
    <div>
      {initialState.tabNames.map((tabName) => (
        <div className="container-movie-card" key={tabName.id}>
          <TabBar tabName={tabName} />
          <div className="movie-card-list">
            <div className="media discover scroller_wrap should_fade is_fading">
              <MovieCard tabNameId={tabName.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
