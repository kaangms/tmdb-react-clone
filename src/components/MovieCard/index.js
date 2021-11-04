/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import TabBar from "../toolbox/TabBar";
import "./style.scss";
// import Background from "../../images/movie-card/moviecard.jpg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MovieCard = ({ filmSections }) => {
  //TODO:Çok resim geldiği zaman kaydırma eklenecek
  return (
    <div className="container">
      {filmSections.map((filmSection) => (
        <div>
          <TabBar filmSection={filmSection} />
          <div className="movie-card-list">
            {filmSection.films.map((film) => (
              <div class="movie-card">
                <img class="movie-image" src={film.img} alt="img" />
                {/* <div
                  style={{ backgroundImage: `url(${Background})` }}
                  class="movie-image"
                ></div> */}
                <h4 class="movie-title">{film.name}</h4>
                <h6>{film.publishDate}</h6>
                <div class="movie-rating">
                  <CircularProgressbar
                    value={film.rating}
                    text={`${film.rating}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "black",
                      textColor: "white",
                      pathColor: RatingColor(parseInt(film.rating)),
                      trailColor: "transparent",
                    })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieCard;

function RatingColor(param) {
  if (param >= 75 && param <= 100) return "green";
  else if (param >= 50 && param < 75) return "yellow";
  else if (param >= 0 && param < 50) return "yellow";
  else return "black";
}
