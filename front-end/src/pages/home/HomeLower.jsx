import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import "./Home.css";

const HomeLower = () => {
  return (
    <Box className="lower_side" mt={"5rem"}>
      <Flex justifyContent={{lg:"right",md:"right",sm:"center",base:"center"}}>
        <Box bg={"white"} p={"3rem"} boxShadow="md" rounded="md">
          <Heading
            size={{ lg: "2xl", md: "xl", sm: "md", base: "md" }}
            width={{ lg: "80%", md: "80%", base: "100%", sm: "100%" }}
            m={"8px"}
          >
            Healthy Meals Delivered Weekly
          </Heading>
          <Input
            w={"70%"}
            m={"1rem"}
            type="text"
            placeholder="freshly@freshly.com"
          />
          <Button
           colorScheme={"blue"}
            p={{ lg: "1.5rem", md: "1.3rem", sm: "1rem", base: "0.7rem" }}
            m={{ lg: "1.5rem", md: "1.3rem", sm: "1rem", base: "1rem" }}
            fontSize={"lg"}
          >
            Get Started!
          </Button>
          <Text>
            Already have an account?
            <a href="">Log in.</a>{" "}
          </Text>
          <Text>
            By continuing, you agree to ourTermsandPrivacy Policy.& will receive
            emails from Freshly.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeLower;
