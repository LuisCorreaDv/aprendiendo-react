import './Filters.css'

export function Filters() {
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" name="price" id="price" min="0" max="1000" />
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
