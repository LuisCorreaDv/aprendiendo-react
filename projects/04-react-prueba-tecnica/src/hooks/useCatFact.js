import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState("Cat fact");

  const refreshFact = () => {
    getRandomFact().then(setFact);
  };

  //1) Fetch a la API de gatitos para obtener un hecho
  useEffect(refreshFact, []);

  //Hay que evitar que el custom hook devuelva la actualizacion del estado
  return { fact, refreshFact };
};