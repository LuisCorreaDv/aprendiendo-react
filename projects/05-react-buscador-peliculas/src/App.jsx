
import './App.css'

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form action="" className="form">
          <input type="text" placeholder="Movie to Search..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        Aqui van los resultados
      </main>
    </div>
  );
}

export default App
