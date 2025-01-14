import { useEffect, useState } from "react";

export function useCatImage({fact}) {
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