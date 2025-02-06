import { createContext } from "react"

// 1. Crear el contexto
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto
// eslint-disable-next-line react/prop-types
export function FiltersProvider ({ children }) {
    return (
        // Se usa el componente FiltersContext.Provider para proveer el contexto a los componentes hijos
        <FiltersContext.Provider value={{
            category: 'all',
            minPrice: 0
        }}

        //Se usa children para recibir lo que se va a renderizar dentro del provider
        >
            
            {children}
        </FiltersContext.Provider>
    )
}