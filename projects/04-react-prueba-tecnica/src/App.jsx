import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`;

export function App () {

    const [fact, setFact] = useState('Cat fact')
    const [imageUrl, setImageUrl] = useState()

    const getRandomFact = () => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then((response) => response.json())
        .then((data) => {
          const { fact } = data;
          setFact(fact);
        });
    }

    //1) Fetch a la API de gatitos para obtener un hecho
    useEffect(getRandomFact, []);

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

    const handleClick = () => {
        getRandomFact();;
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>
            {/* Renderizado condicional */}
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={'Image extracted using the first three words of the fact obtained'} />}
        </main>
    )
}