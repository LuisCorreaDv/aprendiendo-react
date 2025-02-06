import { useState } from "react";
import "./Filters.css";

// eslint-disable-next-line react/prop-types
export function Filters({onChange}) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    // DOS FUENTES DE LA VERDAD
    //Se sa prevState para obtener el estado anterior y no perder la referencia 
    onChange(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {

    //Se esta pasando la funcion de actualizacion de estado nativa de react a un componente hijo
    onChange(prevState => ({
        ...prevState,
        category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de: </label>
        <input 
            type="range" 
            name="price" 
            id="price" 
            min="0" 
            max="1000" 
            onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select name="category" id="category" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="fragrances">Perfumes</option>
          <option value="furniture">Muebles</option>
        </select>
      </div>
    </section>
  );
}
