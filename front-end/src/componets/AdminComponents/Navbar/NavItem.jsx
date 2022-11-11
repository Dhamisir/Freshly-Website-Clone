import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ icon, name, links }) => {
  return (
    <Link to={links} style={{ textDecoration: "none" }}>
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
