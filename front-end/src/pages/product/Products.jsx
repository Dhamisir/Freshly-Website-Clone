import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Choose from "./Choose";
import Navbar from "./Navbar";
import ShowProducts from "./ShowProducts";
const Products = () => {
  const { isAuth, token } = useSelector(store => store.userLogin)
  if (!isAuth) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Navbar />
      <Choose />
      <ShowProducts />
    </>
  );
};

export default Products;
