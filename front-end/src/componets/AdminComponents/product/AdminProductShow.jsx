import React from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsThreeDotsVertical, BsPencilFill } from "react-icons/bs";
import { MdDelete, MdAddCircleOutline } from "react-icons/md";

import { Link } from "react-router-dom";
const AdminProductShow = () => {
  return (
    <div>
      <Container maxW={"100%"}>
        <Heading textAlign={"center"}>Product</Heading>
        <Flex justifyContent={"flex-end"}>
          <Button
            variant={"solid"}
            colorScheme={"facebook"}
            leftIcon={<MdAddCircleOutline />}
          >
            <Link to={"/admin/addProduct"}>Add Product</Link>
          </Button>
        </Flex>
        <TableContainer>
          <Table variant={"unstyled"}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Product Price</Th>
                <Th>Time</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr _hover={{ bg: "gray.200" }}>
                <Td>636c9517919a8ad4475755ca</Td>
                <Td>
                  <Image
                    src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8b1f5aa9b139be56_635823f4ce492904901f973e_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg"
                    width={"50%"}
                  />
                </Td>
                <Td>BBQ Bison Burger</Td>
                <Td>984 $</Td>
                <Td>2022-11-10T06</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<BsThreeDotsVertical />}
                      variant="outline"
                    />
                    <MenuList scale={"20px"}>
                      <MenuItem icon={<BsPencilFill />}>Edit</MenuItem>
                      <MenuList color={"red"}>
                        <MenuItem icon={<MdDelete />}>Delete</MenuItem>
                      </MenuList>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr _hover={{ bg: "gray.200" }}>
                <Td>636c9517919a8ad4475755ca</Td>
                <Td>
                  <Image
                    src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8b1f5aa9b139be56_635823f4ce492904901f973e_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg"
                    width={"50%"}
                  />
                </Td>
                <Td>BBQ Bison Burger</Td>
                <Td>984 $</Td>
                <Td>2022-11-10T06</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<BsThreeDotsVertical />}
                      variant="outline"
                      placement="left"
                    />
                    <MenuList>
                      <MenuItem icon={<BsPencilFill />}>Edit</MenuItem>
                      <MenuList color={"red"}>
                        <MenuItem icon={<MdDelete />}>Delete</MenuItem>
                      </MenuList>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default AdminProductShow;
