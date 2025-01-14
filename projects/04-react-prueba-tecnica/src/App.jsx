import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from './services/facts.js'
import { useCatImage } from './hooks/useCatImage.js'

export function App() {
  const [fact, setFact] = useState("Cat fact");
  const { imageUrl } = useCatImage({ fact });

  //1) Fetch a la API de gatitos para obtener un hecho
  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {/* Renderizado condicional */}
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={
            "Image extracted using the first three words of the fact obtained"
          }
        />
      )}
    </main>
  );
}