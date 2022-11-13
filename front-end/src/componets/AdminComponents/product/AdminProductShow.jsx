import React, { useEffect } from "react";
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

import { MdAddCircleOutline } from "react-icons/md";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminShowProduct,
  decrmeent,
  increment,
} from "../../../redux/AdminShowProduct/AdminShowProduct.action";
import AdminProductShowCard from "./AdminProductShowCard";
const AdminProductShow = () => {
  const { adminProduct, page } = useSelector((store) => store.adminShowProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminShowProduct(page));
  }, [page]);
  console.log(adminProduct);
  return (
    <div>
      <Container maxW={"100%"} mt={"20px"}>
        <Heading textAlign={"center"}>Product</Heading>
        <Flex justifyContent={"space-between"}>
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
              onClick={() => dispatch(decrmeent())}
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
              onClick={() => dispatch(increment())}
              disabled={page === 4}
            >
              Next
            </Button>
          </Flex>
          <Button
            variant={"solid"}
            bg={"green.700"}
            color={"white"}
            _hover={{
              bg: "green.600",
            }}
            mb={"20px"}
            leftIcon={<MdAddCircleOutline />}
          >
            <Link to={"/admin/addProduct"}>Add Product</Link>
          </Button>
        </Flex>
        <TableContainer boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}>
          <Table variant={"simple"}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Product Price</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {adminProduct.map((item) => (
                <AdminProductShowCard
                  key={item._id}
                  id={item._id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex gap={"60px"} mt={"20px"} justifyContent={"center"}>
          <Button
            variant={"solid"}
            bg={"green.700"}
            color={"white"}
            width={"7rem"}
            _hover={{
              bg: "green.600",
            }}
            mb={"20px"}
            onClick={() => dispatch(decrmeent())}
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
            onClick={() => dispatch(increment())}
            disabled={page === 5}
          >
            Next
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default AdminProductShow;
