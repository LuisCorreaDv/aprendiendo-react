import "./Products.css";
import { AddToCartIcon } from "./Icons.jsx";

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
    
  return (
    <main className="products">
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {products.map(product => {
        return (
            <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
                <button>
                    <AddToCartIcon />
                </button>
            </div>
          </li>
        )
        })}
      </ul>
    </main>
  )
}
