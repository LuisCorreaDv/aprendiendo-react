import { useState } from "react";
import "./Filters.css";

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
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
        <select name="category" id="category">
          <option value="all">Todas</option>
          <option value="fragrances">Perfumes</option>
          <option value="furniture">Muebles</option>
        </select>
      </div>
    </section>
  );
}
