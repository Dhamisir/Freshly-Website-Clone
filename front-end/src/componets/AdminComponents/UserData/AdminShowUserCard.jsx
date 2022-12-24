import { Button, Td, Tr, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUser,
} from "../../../redux/AdminShowUser/AdminShowUser.action";
const AdminShowUserCard = ({ id, first_name, last_name, email }) => {
  const { adminAlluser, page } = useSelector((store) => store.adminShowUser);
  let toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser(page));
  }, [page, id]);
  return (
    <Tr
      _hover={{
        bg: "gray.100",
      }}
      textAlign={"center"}
    >
      <Td>{id}</Td>
      <Td>{first_name}</Td>
      <Td>{last_name}</Td>
      <Td>{email}</Td>
      <Td>
        <Button
          leftIcon={<MdDelete />}
          colorScheme="red"
          variant="solid"
          onClick={() => {dispatch(deleteUser(id));   toast({
            title : `Deleted Successfully`,
            status: "success",
            position: "top",
            isClosable: true,
            })}}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export default AdminShowUserCard;
