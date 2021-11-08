import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToThumbList,
  removeFromThumbList,
} from "../../../store/actions/movieActons";

import "./style.scss";
const ThumbsMovie = ({ className, movieId }) => {
  const dispatch = useDispatch();
  const thumbList = useSelector((state) => state.moviesReducer.thumbList);
  useEffect(() => {}, [dispatch, thumbList]);
  function thumbsColor(movieId) {
    var movie = thumbList.find((m) => m.id === movieId);

    if (movie === undefined) {
      return "gray";
    }
    if (movie.status === "up") return "blue";
    else if (movie.status === "down") return "red";
    return "gray";
  }
  function getMovieStatus(movieId) {
    var movie = thumbList.find((m) => m.id === movieId);
    if (movie === undefined) {
      return undefined;
    }
    return movie.status;
  }
  function thumbAction(changeStatus, movieId, currentStatus) {
    if (currentStatus === undefined) {
      const movie = { id: movieId, status: changeStatus };
      dispatch(addToThumbList(movie));
    } else if (currentStatus === "up" || currentStatus === "down") {
      dispatch(removeFromThumbList({ id: movieId }));
    }
  } //var movie = { id: movieId, status: status };
  return (
    <div className={className}>
      {(getMovieStatus(movieId) === "up" ||
        getMovieStatus(movieId) === undefined) && (
        <FontAwesomeIcon
          onClick={() => thumbAction("up", movieId, getMovieStatus(movieId))}
          id="fa-thumbs-up"
          icon={faThumbsUp}
          color={thumbsColor(movieId)}
        />
      )}
      {(getMovieStatus(movieId) === "down" ||
        getMovieStatus(movieId) === undefined) && (
        <FontAwesomeIcon
          onClick={() => thumbAction("down", movieId, getMovieStatus(movieId))}
          id="fa-thumbs-down"
          icon={faThumbsDown}
          color={thumbsColor(movieId)}
        />
      )}
    </div>
  );
};
export default ThumbsMovie;
