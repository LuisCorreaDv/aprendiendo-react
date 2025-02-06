import { products as initialProducts} from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'

function App() { 
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0 
  })

  // Función para filtrar los productos
  const filterProducts = (products) => {
    // Filter para regresar los productos que cumplan con las condiciones
    return products.filter(product => {
      
      return (
        // Si el precio del producto es mayor o igual al precio mínimo y  la categoría del producto es igual a la categoría seleccionada o la categoría seleccionada es 'all'
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)
  
  return (
    <>
      <Header />
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
