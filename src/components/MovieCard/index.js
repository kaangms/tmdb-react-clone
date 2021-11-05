/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, Suspense } from "react";
import TabBar from "../toolbox/TabBar";
import "./style.scss";
import MovieService from "../../services/MovieService";
import LoadImageCard from "../toolbox/ImageCard/ImageCard";
import RaitingBar from "../toolbox/RaitingBar";
const ImageCard = React.lazy(() => import("../toolbox/ImageCard/ImageCard"));
// // const ImageCard = React.lazy(async () => {
// //   await new Promise((resolve) => setTimeout(resolve, 5 * 1000));

// //   return await (Math.floor(Math.random() * 10) >= 4
// //     ? import("../toolbox/ImageCard/ImageCard")
// //     : Promise.reject(new Error()));
// // });
const MovieCard = () => {
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
    <div>
      {tabNames.map((tabName) => (
        <div className="container-movie-card" key={tabName.id}>
          <TabBar tabName={tabName} />
          <div className="movie-card-list">
            <div className="media discover scroller_wrap should_fade is_fading">
              <div className="column_content flex scroller loaded">
                {movies.map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <Suspense fallback={<LoadImageCard isLoading={true} />}>
                      <ImageCard
                        path={movie.poster_path}
                        className="movie-image"
                      />
                      <h4 className="movie-title">{movie.name}</h4>
                      <h6>{movie.first_air_date}</h6>
                      <RaitingBar
                        className="movie-rating"
                        vote_average={movie.vote_average}
                      />
                    </Suspense>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieCard;

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
