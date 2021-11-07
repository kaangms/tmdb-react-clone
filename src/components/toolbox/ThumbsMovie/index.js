import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getThumbList } from "../../../store/actions/movieActons";
import "./style.scss";
const ThumbsMovie = ({ className, thumbsStatus, movieId }) => {
  const [thumbList, setThumbList] = useState([]);
  const dispatch = useDispatch();
  // const selectedTabNames = useSelector((state) => state.tabNameReducer);

  useEffect(() => {}, []);
  function thumbAction(status) {
    let newThumbList = thumbList.push(status + movieId);
    setThumbList(newThumbList);
    dispatch(getThumbList(thumbList));
  }
  return (
    <div className={className}>
      {(thumbsStatus === "true" || thumbsStatus === undefined) && (
        <FontAwesomeIcon
          onClick={() => thumbAction("true")}
          id="fa-thumbs-up"
          icon={faThumbsUp}
          color={thumbsColor(thumbsStatus)}
        />
      )}
      {(thumbsStatus === "false" || thumbsStatus === undefined) && (
        <FontAwesomeIcon
          onClick={() => thumbAction("false")}
          id="fa-thumbs-down"
          icon={faThumbsDown}
          color={thumbsColor(thumbsStatus)}
        />
      )}
    </div>
  );
};
export default ThumbsMovie;

function thumbsColor(thumbsStatus) {
  if (thumbsStatus === undefined) return "gray";
  else if (thumbsStatus === "true") return "blue";
  else if (thumbsStatus === "false") return "red";
}
