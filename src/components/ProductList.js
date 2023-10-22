import { ProductCard } from "./ProductCard";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialProductList } from "../redux/filterSlice";
export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.filterState.productList);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      dispatch(initialProductList(data));
    }

    getProducts();
  }, []);

  

  return (
    <main>
      <div className="flex flex-wrap justify-center lg:flex-row z-1">
        {products.length &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </main>
  );
};
