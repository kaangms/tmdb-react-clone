import React from "react";
import "./style.scss";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../../config";
import loadingSvg from "../../../images/toolbox/ImageCard/loading.svg";
const ImageCard = ({ path, className, isLoading, color }) => {
  let src = isLoading ? loadingSvg : IMAGE_BASE_URL + IMAGE_SIZE + path;
  className = isLoading ? " loading-img" : className;

  return (
    <div>
      <img
        style={{ background: color }}
        className={className}
        src={src}
        alt="img"
      />
      {isLoading && <h4 className="movie-title"> ...loading</h4>}
    </div>
  );
};
export default ImageCard;
