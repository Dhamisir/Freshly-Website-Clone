import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
  useToast
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsThreeDotsVertical, BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  adminShowProduct,
  deleteProduct,
} from "../../../redux/AdminShowProduct/AdminShowProduct.action";
const AdminProductShowCard = ({ id, img, title, price }) => {
  const { adminProduct, page } = useSelector((store) => store.adminShowProduct);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(adminShowProduct(page));
  // }, [page, id]);
  let toast = useToast();
  return (
    <Tr
      _hover={{
        bg: "gray.100",
      }}
      textAlign={"center"}
    >
      <Td>{id}</Td>
      <Td width={"20%"}>
        <Image src={img} />
      </Td>
      <Td>{title}</Td>
      <Td>{price} $</Td>
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
            <MenuList
              color={"red"}
              onClick={() => {
                dispatch(deleteProduct(id));
                toast({
                  title: "Deleted Successfully",
                  status: "success",
                  isClosable: true,
                  duration: 2000,
                  position: "top",
                });
              }}
            >
              <MenuItem icon={<MdDelete />}>Delete</MenuItem>
            </MenuList>
          </MenuList>
        </Menu>
      </Td>
    </Tr>
  );
};

export default AdminProductShowCard;
