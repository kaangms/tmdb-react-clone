/* eslint-disable no-unused-vars */
import axios from "axios";

export default class TestAPIService {
  getCategories() {
    return axios.get(
      "https://api.themoviedb.org/3/movie/550?api_key=dc26fe9a30c401d78f18942d83f88fca"
    );
  }
}
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzI2ZmU5YTMwYzQwMWQ3OGYxODk0MmQ4M2Y4OGZjYSIsInN1YiI6IjYxODNjZDIzMWM2YWE3MDA4OTZlNzZjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fkDHTd4AtyhcpWOWpXVp_oLP-CCidJ4eW0tYbUB8K7w";
const apiKey = "dc26fe9a30c401d78f18942d83f88fca";
