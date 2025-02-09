import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(CartContext)

    //Es buena practica lanzar un error si el hook se quiere usar fuera del provider
    if (context === undefined) {
        throw new Error('useCart must be used with CartProvider')
    }

    return context
}