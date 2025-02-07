// Custom hook que se encarga de la funcionalidad de los filtros
import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters () {
  // const [filters, setFilters] = useState({
  //   category: "all",
  //   minPrice: 0,
  // });
  const {filters, setFilters}  = useContext(FiltersContext)

  // Función para filtrar los productos
  const filterProducts = (products) => {
    // Filter para regresar los productos que cumplan con las condiciones
    return products.filter((product) => {
      return (
        // Si el precio del producto es mayor o igual al precio mínimo y  la categoría del producto es igual a la categoría seleccionada o la categoría seleccionada es 'all'
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return {filters, filterProducts, setFilters}
}