import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";

const NavItem = ({ icon, name }) => {
  return (
    <Link
      textAlign={"center"}
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        pl={"20px"}
        borderRadius="10px"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "green.700",
          color: "white",
        }}
      >
        <Icon
          mr="4"
          fontSize="20"
          color={"black"}
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
        <Text
          color={"black"}
          _groupHover={{
            color: "white",
          }}
        >
          {name}
        </Text>
      </Flex>
    </Link>
  );
};

export default NavItem;
