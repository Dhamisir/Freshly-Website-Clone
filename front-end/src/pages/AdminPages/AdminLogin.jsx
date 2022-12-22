import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../componets/Footer";
import Navbar from "../../componets/Navbar";

import { adminLogin } from "../../redux/adminLogin/adminLogin.action";

const AdminLogin = () => {
  const [loginCred, setLoginCred] = useState({});
  const dispatch = useDispatch();
  const { isAuth, error, isLoading } = useSelector((store) => store.adminAuth);
  const { state } = useLocation();
  const naviget = useNavigate();
  const toast = useToast();
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCred({
      ...loginCred,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(loginCred));
  };

  useEffect(() => {
    if (isAuth) {
      if (state.form) {
        naviget(state.form, { replace: true });
      } else {
        naviget("/admin");
        toast({
          title: "Success",
          description: "Welcome To The Admin Dashboard",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    }

    if (error) {
      toast({
        title: "Something Went Wrong ",
        description: "You Are Note Admin & Enter Right Credential",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
    
  }, [isAuth, error]);
  
  return (
    <div>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
      //   bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={6}
          w={"full"}
          maxW={"md"}
          // bg={useColorModeValue('white', 'gray.700')}
          rounded={"xl"}
          boxShadow={"lg"}
          p={5}
          my={12}
          alignItems={"center"}
        >
          <Image
            src={
              "https://user-images.githubusercontent.com/96005514/200858098-c931e48c-1a50-4347-ba06-62cf80e3593f.png"
            }
            width={"30%"}
          />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Admin
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl id="email" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Email address</FormLabel>
              <Input
                placeholder="your-email@nextfood.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                onChange={hanldeChange}
              />
            </FormControl>
            <FormControl id="password" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Password</FormLabel>
              <Input type="password" name="password" onChange={hanldeChange} />
            </FormControl>
            <Stack spacing={6} alignItems={"center"}>
              {
                isLoading?<Button
                isLoading
                loadingText='Loading'
                width={"200px"}
                bg={"green.700"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
                type="submit"
              >
                Login
              </Button> : <Button
                width={"200px"}
                bg={"green.700"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}
                type="submit"
              >
                Login
              </Button>
              }
              
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Footer />
    </div>
  );
};

export default AdminLogin;
