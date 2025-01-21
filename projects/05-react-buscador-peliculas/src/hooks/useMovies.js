import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";
import { useState } from "react";

export function useMovies({ search }) {
  const [responseMovies, setResponsMovies] = useState([]);
  
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  //Buscar las peliculas con el input
  const getMovies = () => {
    if (search) {
      setResponsMovies(withResults);
    } else {
      setResponsMovies(withoutResults);
    }
  };

  return { movies: mappedMovies, getMovies };
}
