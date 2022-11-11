import { Container } from "@chakra-ui/react";
import React from "react";
import AdminProductShow from "../../componets/AdminComponents/product/AdminProductShow";
import Navbar from "./Navbar";

const AdminProduct = () => {
  return (
    <div>
      <Navbar />
      <Container maxW={"6xl"} ml={"20%"}>
        <AdminProductShow />
      </Container>
    </div>
  );
};

export default AdminProduct;
