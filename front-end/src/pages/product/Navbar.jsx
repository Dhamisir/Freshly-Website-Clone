import React, { useEffect } from "react";
import DPicker from "./DPicker";
import MenuOpt from "./MenuOpt";
import { Flex, Box, Button, Heading, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartShow } from "../../redux/cart/cart.action";

const Navbar = () => {
  const { token } = useSelector(store => store.userLogin);
  const { cart } = useSelector(store => store.cartItems);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartShow({ token: token }))
  }, [])

  return (
    <>
      <Flex justify={{ lg: "space-between", md: "space-between", sm: "center", base: "center" }} boxShadow="lg" rounded={"lg"} p={"5px"}>
        <Box>
          <Link to="/">
            <Button
              bg={"white"}
              border="none"
              _hover={{ bg: "white" }}
              color="blue"
              display={{ lg: "block", md: "block", sm: "none", base: "none" }}
            >
              <ChevronLeftIcon /> Back
            </Button>
          </Link>
        </Box>
        <Box alignSelf={"center"}>
          <DPicker />
        </Box>
        <Box>
          <Link to="/cart"><Button bg="#3167FF" colorScheme="white">Cart : {cart.length}</Button></Link>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
