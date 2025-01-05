import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App () {

    const [fact, setFact] = useState('Cat fact')

    //1) Fetch a la API de gatitos para obtener un hecho
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(data => setFact(data.fact))
    },[])

    return (
        <main>
            <h1>App de gatitos</h1>
            <p>{fact}</p>
        </main>
    )
}