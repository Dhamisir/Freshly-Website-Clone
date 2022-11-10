import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AdminRequireAuth from "../../hoc/AdminRequireAuth";
import AdminHome from "./AdminHome";
import AdminLogin from "./AdminLogin";

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
      </Routes>
    </div>
  );
};

export default AllRouter;
