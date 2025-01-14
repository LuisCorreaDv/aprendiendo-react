import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from './services/facts.js'

function useCatImage({fact}) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    //2)Recuperar las 3 primeras palabras del hecho
    const threeFirstWords = fact.split(" ", 3).join(" ");

    //3) Fetch a la API de gatitos para obtener la imagen
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((response) => response.json())
      .then((response) => {
        const { _id } = response;
        const url = `https://cataas.com/cat/${_id}/says/${threeFirstWords}?size=50&color=red`;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl };
}

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