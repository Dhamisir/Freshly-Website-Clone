import React from "react";
import DPicker from "./DPicker";
import MenuOpt from "./MenuOpt";
import { Flex, Box, Button, Heading, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Flex justify={{lg:"space-between",md:"space-between",sm:"center",base:"center"}} boxShadow="lg" rounded={"lg"} p={"5px"}>
        <Box>
          <Button
            bg={"white"}
            border="none"
            _hover={{ bg: "white" }}
            color="blue"
            display={{lg:"block",md:"block",sm:"none",base:"none"}}
          >
            <ChevronLeftIcon /> Back
          </Button>
        </Box>
        <Box>
          <DPicker />
        </Box>
        <Box>
          <MenuOpt />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
