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
const ShowProducts = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {data, singleData} = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
    dispatch(singleGet());
  }, []);
  
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
              onClick={onOpen}
              height="250px"
              src={el.img[0]}
            />
            <Text>{el.description}</Text>
            <Flex justifyContent={"space-between"}>
              <Heading size={"sm"}>Price - $ {el.price}</Heading>
              <Heading size={"sm"}>Rating - {el.rating}</Heading>
            </Flex>
            <Button m={"10px"} colorScheme={"blue"}>
              Add To Cart
            </Button>
            {/* </Flex> */}
          </Box>
        ))}
      </Grid>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>{singleData.title}</Heading>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowProducts;
