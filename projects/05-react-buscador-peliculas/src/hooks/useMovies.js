import { useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Buscar las peliculas con el input
  const getMovies = async () => {
    try {
      setLoading(true);
      setError(null);

      const newMovies = await searchMovies({search})
      setMovies(newMovies);
    } catch(e) {
      setError(e.message);
    } finally {
      //Se ejecuta siempre, tanto si hay error como si no 
      setLoading(false);
    }
    
  };

  return { movies, getMovies, loading, error };
}
