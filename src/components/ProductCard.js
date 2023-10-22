import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

export const ProductCard = ({ product }) => {
  const { id, title, price, description, image } = product;
  const [bookmark, setBookmark] = useState(false);
  const products = useSelector((state) => state.cartState.cartList);

  const dispatch = useDispatch();

  // add to cart function
  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  // remove from cart function
  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }

  // To check whether product is already in cart or not
  useEffect(() => {
    const isInCart = products.find((item) => item.id === product.id);

    if (isInCart) {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
  }, [products]);

  return (
    <div className="m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        <div class="bg-gray-200 h-64">
          <img
            src={image}
            className="mx-auto rounded-t-lg h-64"
            alt="product_image"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>₹</span>
            <span>{price}</span>
          </span>

          {bookmark ? (
            <button
              onClick={() => handleRemoveFromCart(product)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(product)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Add To Cart
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
