import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

export default class MovieService {
  getMovies(tabName) {
    let endpoint = `${BASE_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${getMoviePage(
      tabName
    )}`;
    // console.log(endpoint);

    return axios.get(endpoint);
  }
}
function getMoviePage(tabName) {
  switch (tabName) {
    case "Streaming":
      return 1;
    case "On Tv":
      return 2;
    case "For Rent":
      return 3;
    case "In Theaters":
      return 4;
    case "Movies":
      return 5;
    case "TV":
      return 6;
    case "Today":
      return 7;
    case "This Week":
      return 8;
    default:
      return 9;
  }
}
