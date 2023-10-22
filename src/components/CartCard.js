import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }

  return (
    <div className="flex flex-wrap justify-between items-center dark:bg-lime-950  border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <a href="">
          <img className="w-16 rounded" src={product.image} alt="" />
        </a>
        <div className="my-auto">
          <a href="">
            <p className="text-lg ml-2 dark:text-slate-200">{product.title}</p>
          </a>
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="text-base ml-2 text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>₹ {product.price}</span>
      </div>
    </div>
  );
};
