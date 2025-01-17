import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();

    //const fields = Object.fromEntries(new window.FormData(event.target)); -> Para recuperar los datos de un formulario con muchos inputs
    const fields = new window.FormData(event.target);
    const query = fields.get("query");
    console.log(query);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" type="text" placeholder="Movie to Search..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
