import { Routes, Route } from "react-router-dom"

import { HomePage, ProductDetail, CartList, LogIn, Registration, PageNotFound  } from "../pages"

export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<CartList />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
}