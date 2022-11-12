
import {
  Box,
  Heading,
  Image,
  Grid,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproducts } from "../../redux/products/product.actions";
import { singleGet } from "../../redux/products/product.actions";
import { Navigate } from 'react-router-dom'
import { cartAdd, cartShow } from '../../redux/cart/cart.action'

const ShowProducts = () => {
  const [show, setShow] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, singleData } = useSelector((store) => store.product);
  const { isAuth, token } = useSelector(store => store.userLogin);
  const { cart } = useSelector(store => store.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
    dispatch(singleGet(show));
    dispatch(cartShow({ token: token }))
  }, []);


  if (!isAuth) {
    return <Navigate to="/login" />
  }

  const checkCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId == id) {
        return true
      }
    }
    return false;
  }

  return (
    <>
      <Grid
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
          base: "repeat(,1fr)",
        }}
        justifyContent="center"
        width={"90%"}
        margin="auto"
        gap="20px"
      >
        {data.map((el) => (
          <Box boxShadow={"lg"} p="5px" rounded="lg" key={el._id}>
            {/* <Flex flexDirection={"column"}> */}
            <Image
              borderRadius={"10px"}
              width={"300px"}
              onClick={() => {
                onOpen();
                setShow(el._id);
              }}
              height="250px"
              src={el.img[0]}
            />

            <Text>{el.description}</Text>
            <Flex justifyContent={"space-between"}>
              <Heading size={"sm"}>Price - $ {el.price}</Heading>
              <Heading size={"sm"}>Rating - {el.rating}</Heading>
            </Flex>
            {
              checkCart(el._id) ? (
                <Button disabled={true} m={"10px"} colorScheme={"blue"} onClick={() => {
                  dispatch(cartAdd({ token: token, productId: el._id }))
                }}>Add To Cart</Button>
              ) :
                (
                  <Button disabled={false} m={"10px"} colorScheme={"blue"} onClick={() => { dispatch(cartAdd({ token: token, productId: el._id })) }}>Add To Cart</Button>
                )
            }
          </Box>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{singleData.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={singleData.img} />
            <Text>{singleData.description}</Text>
            <Heading size={"sm"}>Price - $ {singleData.price}</Heading>
            <Heading size={"sm"}>Rating - {singleData.rating}</Heading>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowProducts;
