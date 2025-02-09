import { createContext, useState } from "react";

// 1. Crear el contexto
export const CartContext = createContext()

//2. Crear el provider del contexto
// eslint-disable-next-line react/prop-types
export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = product =>{
        //Checar si el producto ya esta en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        // Si hay un producto en el carrito
        if (productInCartIndex >= 0) {
            // Se usa structuredClone para hacer una copia del carrito y no modificar el original
            const newCart = structuredClone(cart)
            // Se aumenta la cantidad del producto en el carrito
            newCart[productInCartIndex].quantity += 1
            // Se actualiza el carrito
            return setCart(newCart)
        }

        // Si no hay un producto en el carrito, se agrega con el estado anterior y se le asigna una cantidad de 1
        setCart(prevState => {[
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]})
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

