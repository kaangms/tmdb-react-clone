import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieService from "../../services/MovieService";
import { initialState } from "../../store/reducers/tabNameReducer";
import LoadImageCard from "../toolbox/ImageCard/ImageCard";
import RaitingBar from "../toolbox/RaitingBar";
import ThumbsMovie from "../toolbox/ThumbsMovie";
import "./style.scss";
const ImageCard = React.lazy(() => import("../toolbox/ImageCard/ImageCard"));
const MovieCard = ({ tabNameId }) => {
  const selectedTabNames = useSelector((state) => state.tabNameReducer);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let movieService = new MovieService();
    movieService
      .getMovies(
        selectedTabNames[tabNameId - 1] ??
          initialState.selectedTabNames[tabNameId - 1]
      )
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error(error));
  }, [selectedTabNames, tabNameId]);

  return (
    <div className="column_content flex scroller loaded">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Suspense fallback={<LoadImageCard isLoading={true} />}>
            <ImageCard
              path={movie.poster_path}
              className="movie-image"
              color={RatingColor(movie.vote_average)}
            />
            <h4 className="movie-title">{movie.name}</h4>
            <h6>{movie.first_air_date}</h6>
            <RaitingBar
              className="movie-rating"
              color={RatingColor(movie.vote_average)}
              rate={raiting(movie.vote_average)}
            />
            {/* //TODO:Send rateeterthumbstatus */}
            <ThumbsMovie className="fa-thumbs" movieId={movie.id} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};
export default MovieCard;
function RatingColor(vote_average) {
  var rate = raiting(vote_average);
  if (rate >= 75 && rate <= 100) return "green";
  else if (rate >= 50 && rate < 75) return "yellow";
  else if (rate >= 0 && rate < 50) return "red";
  else return "black";
}
function raiting(vote_average) {
  //10 üzerinden rate
  return parseInt(vote_average) * 10;
}
