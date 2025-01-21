import { useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);



  //Buscar las peliculas con el input
  const getMovies = async () => {
    const newMovies = await searchMovies({search})
    setMovies(newMovies);
  };

  return { movies, getMovies };
}
