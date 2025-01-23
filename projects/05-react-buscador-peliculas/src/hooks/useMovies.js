import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Guardar el valor de la búsqueda anterior
  const previousSearch = useRef(search);

  //Buscar las peliculas con el input
  //useMemo para que no se ejecute en cada renderizado

  //useCallback para que no se cree una nueva función en cada renderizado
  const getMovies = useCallback(async ({ search }) => {
    //Si la búsqueda es igual a la anterior, no se hace nada
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);

      //Guardamos la búsqueda actual
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      //Se ejecuta siempre, tanto si hay error como si no
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, error };
}
