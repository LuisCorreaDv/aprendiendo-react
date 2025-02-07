import { products as initialProducts} from './mocks/products.json'
import { Products } from './components/Products'
import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer';
import { FiltersContext } from './context/filters';

// Custom hook que se encarga de la funcionalidad de los filtros
function useFilters () {
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

function App() {
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters}/>
    </>
  );
}

export default App
