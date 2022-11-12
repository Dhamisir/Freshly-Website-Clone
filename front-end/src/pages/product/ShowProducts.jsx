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
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproducts } from "../../redux/products/product.actions";
import { singleGet } from "../../redux/products/product.actions";
import { Navigate } from "react-router-dom";
import { cartAdd, cartShow } from "../../redux/cart/cart.action";


const check = {
  _id: "",
  title: "",
  subTitle: "",

  img: "",

  description: "",
  rating: 0,
  price: 0,
  ingredients: [
    {
      ingredientsName: "",
      ingredientsImage: "",
    },
  ],
  calorie: 0,
  carbs: 0,
  totalFat: 0,
  protein: 0,
};


const ShowProducts = () => {
  const [show, setShow] = useState(check);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useSelector((store) => store.product);
  const [productItems, setProductItems] = useState([]);

  const { isAuth, token } = useSelector((store) => store.userLogin);
  const { cart } = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getproducts()).then((items) => {
      // console.log("inside dispatch", res);
      setProductItems(items);
    });
    // console.log("outside dispatch");
    // dispatch(singleGet(show));
    dispatch(cartShow({ token: token }));
  }, []);

  console.log("prodyct", productItems);


  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  const checkCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId == id) {
        return true;
      }
    }
    return false;
  };


  const sortingProduct = (e) => {
    if (e.target.value == "low") {
      productItems.sort((a, b) => a.price - b.price);
    } else {
      productItems.sort((a, b) => b.price - a.price);
    }
    // console.log(productItems);
    let updateItems = [...productItems];
    setProductItems(updateItems);
  };


  return (
    <>
    <Flex justify={"center"} mb="2rem">
      <Select
        alignSelf={"center"}
        id="sort"
        onChange={sortingProduct}
        width={"20%"}
        size={{ lg: "sm", base: "xs", sm: "xs" }}
        placeholder="Select option"
      >
        
        <option value="low">Price (Low - High)</option>
        <option value="high">Price (High - Low)</option>
        {/* <option value="freshly fits">Freshly Fits</option>
          <option value="proteins & sides">Proteins & Sides</option> */}
      </Select>
      </Flex>
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
        {productItems.map((el) => (
          <Box boxShadow={"lg"} p="5px" rounded="lg" key={el._id}>
            {/* <Flex flexDirection={"column"}> */}
            <Image
              borderRadius={"10px"}
              width={"100%"}
              onClick={() => {
                onOpen();
                setShow(el);
              }}
              height="250px"
              src={el.img}
            />

            <Text>{el.subTitle}</Text>
            <Flex justifyContent={"space-between"}>
              <Heading size={"sm"}>Price - $ {el.price}</Heading>
              <Heading size={"sm"}>Rating - {el.rating}</Heading>
            </Flex>
            {checkCart(el._id) ? (
              <Button
                disabled={true}
                m={"10px"}
                colorScheme={"blue"}
                onClick={() => {
                  dispatch(cartAdd({ token: token, productId: el._id }));
                }}
              >
                Add To Cart
              </Button>
            ) : (
              <Button
                disabled={false}
                m={"10px"}
                colorScheme={"blue"}
                onClick={() => {
                  dispatch(cartAdd({ token: token, productId: el._id }));
                }}
              >
                Add To Cart
              </Button>
            )}
          </Box>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{show.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Image src={show.img} />
            <Text>
              Ingredients :{" "}
              <Flex gap={"1px"}>
                {show.ingredients.map((el, index) => (
                  <Text
                    as="i"
                    m={"2px"}
                    textAlign="justify"
                    fontWeight={"700"}
                    key={index}
                  >
                    {el.ingredientsName}
                  </Text>
                ))}
              </Flex>
            </Text>
            <Text textAlign={"justify"}>{show.description}</Text>

            {/* <Text>{singleData.ingredients}</Text> */}
            <Flex
              flexDirection={"column"}
              justify="center"
              alignItems={"center"}
            >
              <Text as="i" fontWeight={"700"}>
                Calorie: {show.calorie}
              </Text>
              <Text as="i" fontWeight={"700"}>
                Total Fat: {show.totalFat}
              </Text>
              <Text as="i" fontWeight={"700"}>
                Protein: {show.protein}
              </Text>
              <Text as="i" fontWeight={"700"}>
                Carbs: {show.carbs}
              </Text>
            </Flex>
            <Flex
              justify={"space-between"}
              p={"1rem"}
              boxShadow="lg"
              rounded={"lg"}
            >
              <Heading size={"sm"}>Price - $ {show.price}</Heading>
              <Heading size={"sm"}>Rating - {show.rating}</Heading>
            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};

export default ShowProducts;
