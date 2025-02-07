import { createContext, useState } from "react"

// 1. Crear el contexto
// ****** Este es el que se debe de consumir ******
// eslint-disable-next-line react-refresh/only-export-components
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto
// ****** Este es el que nos provee de acceso al contexto ******

// eslint-disable-next-line react/prop-types
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        // Se usa el componente FiltersContext.Provider para proveer el contexto a los componentes hijos
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}

        //Se usa children para recibir lo que se va a renderizar dentro del provider
        >
            
            {children}
        </FiltersContext.Provider>
    )
}