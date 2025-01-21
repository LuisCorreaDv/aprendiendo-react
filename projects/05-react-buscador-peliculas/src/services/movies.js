export const searchMovies = async (search) => {
  if (search === "") return null;

  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const searchQuery = search.search;
    
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error fetching movies");
  }
};
