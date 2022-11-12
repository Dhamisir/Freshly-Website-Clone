import React from "react";
import freshly from "../../assets/freshly.jpg";
import "./Home.css";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Text,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
const HomeTop = () => {
  return (
    <Flex
      flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      justifyContent={{ sm: "center", base: "center" }}
      textAlign={{ sm: "center", base: "center" }}
      alignContent={{ sm: "center", base: "center" }}
    >
      <Box
        className="backg"
        display={"flex"}
        justifyContent={{lg:"end",md:"end",sm:"center",base:"center"}}
        alignItems={{lg:"end",md:"end",sm:"center",base:"center"}}
        width={{ lg: "55%", md: "55%", sm: "100%", base: "100%" }}
        order={{ lg: "1", md: "1", sm: "2", base: "2" }}
      >
        <Heading
          justifySelf={"bottom"}
          width={{lg:"60%",md:"70%",sm:"100%",base:"100%"}}
          color={"white"}
          padding={"3rem"}
        >
          Delivered to you fresh, not frozen.
        </Heading>
      </Box>

      <Box
        width={{ lg: "55%", md: "55%", sm: "100%", base: "100%" }}
        p="4"
        backgroundColor={"#85E5C6"}
        order={{ lg: "2", md: "2", sm: "1", base: "1" }}
      >
        <Heading
          size={{ lg: "2xl", md: "xl", sm: "lg", base: "lg" }}
          width={{ lg: "80%", md: "80%", sm: "100%" }}
          textAlign={{ lg: "left", md: "left ", sm: "center", base: "center" }}
        >
          Balanced meals for busy lives.
        </Heading>
        <Button
          m={"10px"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          colorScheme={"blue"}

        
        >
          Expore Meals
        </Button>
        <Text display={{ lg: "block", md: "block", sm: "none", base: "none" }}>
          See meals available in your area!
        </Text>
        <FormControl isRequired>
          <FormLabel
            display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          >
            Email Address
          </FormLabel>
          <Input
            display={{ lg: "block", md: "block", sm: "none", base: "none" }}
            backgroundColor="white"
            placeholder="freshly@freshly.com"
          />
        </FormControl>
        <Button
          m={"20px"}
          
          alignSelf={"left"}
      colorScheme={"blue"}
         
        >
          Get Started
        </Button>
        <Text
          w={"70%"}
          margin={"auto"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
        >
          By continuing, you agree to our Terms and Privacy Policy & will
          receive emails from Freshly.
        </Text>
      </Box>
    </Flex>
  );
};

export default HomeTop;
