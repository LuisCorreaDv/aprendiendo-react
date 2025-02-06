import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'

createRoot(document.getElementById('root')).render(
  // Se envuelve la aplicación en el provider para que todos los componentes tengan acceso al contexto
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
