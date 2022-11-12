import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { ingredientsData } from "./ingredients";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { adminAddP } from "../../../redux/AdminAddProduct/adminAddProduct.action";

const ingredientsTypsof = [
  "Gluten Free",
  "Soy Free",
  "High Protein",
  "Dairy Free",
  "Spicy",
  "Has Gluten",
  "<500 Cal",
];
const AdminAddNewProduct = () => {
  const [Product, setProduct] = useState([]);
  const [data, setData] = useState({});
  const [ingredients, srtIngredients] = useState([]);
  const [ingredientsTyps, setIngredientsTyps] = useState([]);
  const toast = useToast();

  const { productData } = useSelector(
    (store) => store.adminAddProduct.productData
  );
  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...Product,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...Product, ingredients, ingredientsTyps });
    dispatch(adminAddP(data));
    add();
  };
  const add = () => {
    toast({
      title: "Product Add",
      status: "success",
      isClosable: true,
      duration: 2000,
      position: "top",
    });
  };
  console.log(data);
  return (
    <div>
      <Stack
        width={"90%"}
        // border={"1px solid red"}
        m={"auto"}
        pl={"20%"}
        spacing={"10"}
        mb={"20%"}
      >
        <Heading textAlign={"center"} mt={"20px"}>
          Add Product
        </Heading>
        <Flex justify={"center"} width={"100%"}>
          <form
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "30px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            onSubmit={handleSubmit}
          >
            <HStack spacing={"10"}>
              <Box width={"50%"}>
                <FormControl isRequired>
                  <FormLabel>Product Titel</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    onChange={hanldeChange}
                    placeholder={"Titel"}
                  />
                </FormControl>
              </Box>
              <Box width={"50%"}>
                <FormControl>
                  <FormLabel>Product Sub Title</FormLabel>
                  <Input
                    type="text"
                    name="subTitle"
                    onChange={hanldeChange}
                    placeholder={"SubTite"}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack spacing={"10"}>
              <Box width={"50%"}>
                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="$" />
                    <Input
                      type={"number"}
                      placeholder="$20"
                      name="price"
                      onChange={hanldeChange}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box width={"50%"}>
                <HStack>
                  <Box width={"100%"}>
                    <FormControl isRequired>
                      <FormLabel>Calorie</FormLabel>
                      <Input
                        type={"number"}
                        placeholder={"calorie"}
                        name="calorie"
                        onChange={hanldeChange}
                      />
                    </FormControl>
                  </Box>
                  <Box width={"100%"}>
                    <FormControl isRequired>
                      <FormLabel>Carbs (g)</FormLabel>
                      <Input
                        type={"number"}
                        placeholder={"Carbs"}
                        name="carbs"
                        onChange={hanldeChange}
                      />
                    </FormControl>
                  </Box>
                  <Box width={"100%"}>
                    <FormControl isRequired>
                      <FormLabel>Total fat (g)</FormLabel>
                      <Input
                        type={"number"}
                        placeholder={"Total fat"}
                        name="totalFat"
                        onChange={hanldeChange}
                      />
                    </FormControl>
                  </Box>
                  <Box width={"100%"}>
                    <FormControl isRequired>
                      <FormLabel>Protein (g)</FormLabel>
                      <Input
                        type={"number"}
                        placeholder={"Protein"}
                        name="protein"
                        onChange={hanldeChange}
                      />
                    </FormControl>
                  </Box>
                </HStack>
              </Box>
            </HStack>
            <HStack spacing={"10"}>
              <Box width={"50%"}>
                <FormControl isRequired>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    size="md"
                    name="description"
                    onChange={hanldeChange}
                  />
                </FormControl>
              </Box>
              <VStack width={"50%"}>
                <Box width={"100%"}>
                  <FormControl isRequired>
                    <FormLabel>Image-1</FormLabel>
                    <Input
                      type={"url"}
                      placeholder={"IMG"}
                      name="img"
                      onChange={hanldeChange}
                    />
                  </FormControl>
                </Box>
                <Box width={"100%"}>
                  <FormControl isRequired>
                    <FormLabel>Image-2</FormLabel>
                    <Input
                      type={"url"}
                      placeholder={"IMG"}
                      name="subImg"
                      onChange={hanldeChange}
                    />
                  </FormControl>
                </Box>
              </VStack>
            </HStack>
            <HStack spacing={"10"}>
              <Box width={"50%"}>
                <FormControl isRequired>
                  <FormLabel>Ingredients</FormLabel>
                  <Multiselect
                    options={ingredientsData}
                    closeOnSelect={true}
                    closeIcon={"circle"}
                    displayValue="ingredientsName"
                    showCheckbox
                    onSelect={(e) => {
                      srtIngredients(e);
                    }}
                    onRemove={(e) => {
                      srtIngredients(e);
                    }}
                  />
                </FormControl>
              </Box>
              <Box width={"50%"}>
                <FormControl isRequired>
                  <FormLabel isRequired>Ingredients Typs</FormLabel>
                  <Multiselect
                    isObject={false}
                    options={ingredientsTypsof}
                    showCheckbox
                    closeIcon={"circle"}
                    onSelect={(e) => {
                      setIngredientsTyps(e);
                    }}
                    onRemove={(e) => {
                      setIngredientsTyps(e);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>

            <Stack spacing={10} pt={8} align={"end"}>
              <Button
                w={"20%"}
                size="lg"
                bg={"green.700"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
                type={"submit"}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Flex>
      </Stack>
    </div>
  );
};

export default AdminAddNewProduct;
