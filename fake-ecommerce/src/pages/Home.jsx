import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="flex gap-4 mb-6">
        {categories.map((category) => (
          <span key={category} className="badge badge-primary">
            {category}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt={product.title} className="h-40 object-contain"/>
              </figure>
              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="text-lg font-semibold">${product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
                {cartItem ? (
                  <div className="flex items-center gap-2">
                    <button onClick={() => removeFromCart(product.id)} className="btn btn-error btn-sm">-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => addToCart(product)} className="btn btn-success btn-sm">+</button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(product)} className="btn btn-primary">
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
