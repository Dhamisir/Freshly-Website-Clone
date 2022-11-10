import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRequireAuth from "../hoc/AdminRequireAuth";
import AdminHome from "./AdminPages/AdminHome";
import AdminLogin from "./AdminPages/AdminLogin";
import Contact from "./Contact";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
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

export default AllRoutes;
