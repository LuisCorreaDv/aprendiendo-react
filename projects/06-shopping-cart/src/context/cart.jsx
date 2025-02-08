import { createContext, useState } from "react";

// 1. Crear el contexto
export const CartContext = createContext()

//2. Crear el provider del contexto
// eslint-disable-next-line react/prop-types
export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = product =>{
        //Forma sencilla de añadir un producto al carrito
        setCart([...cart, product])
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

