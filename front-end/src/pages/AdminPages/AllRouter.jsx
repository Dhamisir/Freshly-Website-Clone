import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AdminRequireAuth from "../../hoc/AdminRequireAuth";
import AdminAddProduct from "./AdminAddProduct";
import AdminHome from "./AdminHome";
import AdminLogin from "./AdminLogin";
import AdminProduct from "./AdminProduct";
import AdminUser from "./AdminUser";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminRequireAuth>
              <AdminHome />
            </AdminRequireAuth>
          }
        ></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route
          path="/admin/product"
          element={
            <AdminRequireAuth>
              <AdminProduct />
            </AdminRequireAuth>
          }
        ></Route>
        <Route
          path="/admin/user"
          element={
            <AdminRequireAuth>
              <AdminUser />
            </AdminRequireAuth>
          }
        ></Route>
        <Route
          path="/admin/addProduct"
          element={
            <AdminRequireAuth>
              <AdminAddProduct />
            </AdminRequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
