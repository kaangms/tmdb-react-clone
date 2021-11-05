import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";
const Thumbs = ({ className }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon id="fa-thumbs-up" icon={faThumbsUp} color="gray" />
      <FontAwesomeIcon id="fa-thumbs-down" icon={faThumbsDown} color="gray" />
    </div>
  );
};
export default Thumbs;
