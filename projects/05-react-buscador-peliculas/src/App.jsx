import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useEffect, useState, useRef } from "react";

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === '';
      return
    }
    
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return
    }

    if (search.match(/[^A-Za-z0-9\s]/)) {
      setError("No se pueden introducir caracteres especiales");
      return
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({search});

  const handleSubmit = (event) => {
    event.preventDefault();

    //const fields = Object.fromEntries(new window.FormData(event.target)); -> Para recuperar los datos de un formulario con muchos inputs
    // const fields = new window.FormData(event.target);
    // const search = fields.get("query");
    getMovies()
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            type="text"
            placeholder="Movie to Search..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
