import { ClearCartIcon, CartIcon } from "./Icons";
import './Cart.css'
import { useId } from "react";
export function Cart() {
    const cartCheckboxId = useId()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" name="cartCheckboxId" id={cartCheckboxId}hidden />
      <aside className="cart">
        <ul>
            <li>
                <img 
                    src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" 
                    alt="Essence Mascara Lash Princess" 
                />
                <div>
                    <strong>Essence Mascara Lash Princess</strong> - $9.99
                </div>

                <footer>
                    <small>
                        Qty: 1
                    </small>
                    <button>+</button>
                </footer>
            </li>
        </ul>

        <button>
            <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
