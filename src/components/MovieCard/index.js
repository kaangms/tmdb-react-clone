/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import TabBar from "../toolbox/TabBar";
import "./style.scss";
// import Background from "../../images/movie-card/moviecard.jpg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "react-circular-progressbar/dist/styles.css";
import MovieService from "../../services/MovieService";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../config";

const MovieCard = ({ filmSections }) => {
  //TODO:Çok resim geldiği zaman kaydırma eklenecek

  const [movies, setMovies] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    let movieService = new MovieService();
    movieService
      .getMovies()
      .then((response) => setMovies(response.data.results))
      // .then((response) => { console.log(response.data.results[0].name + "kaan"); })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      {tabNames.map((tabName) => (
        <div key={tabName.id}>
          <TabBar tabName={tabName} />
          <div className="movie-card-list">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  className="movie-image"
                  src={IMAGE_BASE_URL + IMAGE_SIZE + movie.poster_path}
                  alt="img"
                />
                {/* <div
                  style={{ backgroundImage: `url(${Background})` }}
                  className="movie-image"
                ></div> */}
                <h4 className="movie-title">{movie.name}</h4>
                <h6>{movie.first_air_date}</h6>
                <div className="movie-rating">
                  <CircularProgressbar
                    value={raiting(movie.vote_average)}
                    text={`${raiting(movie.vote_average)}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "black",
                      textColor: "white",
                      pathColor: RatingColor(
                        parseInt(raiting(movie.vote_average))
                      ),
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <div className="fa-thumbs">
                  <FontAwesomeIcon
                    id="fa-thumbs-up"
                    icon={faThumbsUp}
                    color="gray"
                  />{" "}
                  <FontAwesomeIcon
                    id="fa-thumbs-down"
                    icon={faThumbsDown}
                    color="gray"
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
function raiting(rate) {
  //10 üzerinden rate
  return rate * 10;
}
const tabNames = [
  {
    id: 1,
    tabExplain: "What's Popular",
    parents: [
      {
        name: "Streaming",
      },
      {
        name: "On Tv",
      },
      {
        name: "For Rent",
      },
      {
        name: "In Theaters",
      },
    ],
  },
  {
    id: 2,
    tabExplain: "Free To Watch",
    parents: [
      {
        name: "Movies",
      },
      {
        name: "TV",
      },
    ],
  },
  {
    id: 3,
    tabExplain: "Trending",
    parents: [
      {
        name: "Today",
      },
      {
        name: "This Week",
      },
    ],
  },
];
