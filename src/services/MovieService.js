import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

export default class MovieService {
  getMovies(currentPage) {
    let endpoint = `${BASE_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${
      currentPage ?? 1
    }`;
    //TODO:remove-log
    console.log(endpoint);

    return axios.get(endpoint);
  }
}
