import { useState, useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";

// eslint-disable-next-line react/prop-types
export function Filters() {

  // Traer el contexto de los filtros y la funcion para actualizar los filtros
  // eslint-disable-next-line no-undef
  const { setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0);

  // useId para generar un id unico para cada input, funciona haciendo un conteo de cuantas veces se ha llamado
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    // DOS FUENTES DE LA VERDAD
    //Se sa prevState para obtener el estado anterior y no perder la referencia 
    setFilters(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {

    //Se esta pasando la funcion de actualizacion de estado nativa de react a un componente hijo
    setFilters(prevState => ({
        ...prevState,
        category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input 
            type="range" 
            name="price" 
            id={minPriceFilterId} 
            min="0" 
            max="1000" 
            onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="fragrances">Perfumes</option>
          <option value="furniture">Muebles</option>
        </select>
      </div>
    </section>
  );
}
