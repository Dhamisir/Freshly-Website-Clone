import { Container } from "@chakra-ui/react";
import React from "react";
import AdminShowUser from "../../componets/AdminComponents/UserData/AdminShowUser";
import Navbar from "./Navbar";

const AdminUser = () => {
  return (
    <div>
      <Navbar />
      <Container maxW={"6xl"} ml={"20%"}>
        <AdminShowUser />
      </Container>
    </div>
  );
};

export default AdminUser;
