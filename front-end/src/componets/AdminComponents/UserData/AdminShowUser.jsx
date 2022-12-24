import {
  Button,
  Container,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrmeentUser,
  getAllUser,
  incrementUser,
} from "../../../redux/AdminShowUser/AdminShowUser.action";
import AdminShowUserCard from "./AdminShowUserCard";

const AdminShowUser = () => {
  const { adminAlluser, page } = useSelector((store) => store.adminShowUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser(page));
  }, [page]);
  
  return (
    <div>
      <Container maxW={"100%"} mt={"20px"}>
        <Heading textAlign={"center"}>All User</Heading>
        <Flex justifyContent={"flex-start"}>
          <Flex gap={"60px"}>
            <Button
              variant={"solid"}
              bg={"green.700"}
              color={"white"}
              width={"7rem"}
              _hover={{
                bg: "green.600",
              }}
              mb={"20px"}
              onClick={() => dispatch(decrmeentUser())}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant={"solid"}
              bg={"green.700"}
              color={"white"}
              width={"7rem"}
              _hover={{
                bg: "green.600",
              }}
              mb={"20px"}
              onClick={() => dispatch(incrementUser())}
              disabled={page === 4}
            >
              Next
            </Button>
          </Flex>
        </Flex>
        <TableContainer boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}>
          <Table variant={"simple"}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {adminAlluser.map((item) => (
                <AdminShowUserCard
                  key={item._id}
                  id={item._id}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  email={item.email}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default AdminShowUser;
