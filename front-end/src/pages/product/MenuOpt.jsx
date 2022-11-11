import React from "react";
import { BiSupport } from "react-icons/bi";
import {
  ChevronDownIcon,
  ChatIcon,
  PhoneIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  color,
} from "@chakra-ui/react";
const MenuOpt = () => {
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
     color="blue"
     fontWeight={"700"}
     display={{lg:"block",md:"block",sm:"none",base:"none"}}

      >
        <QuestionOutlineIcon  /> Customer Support
        <ChevronDownIcon />
      </MenuButton>
      <MenuList display={"flex"} flexDirection="column" gap={"5px"} p="1rem">
        <MenuItem display={"flex"} p="10px" flexDirection="column" border={"1px solid blue"} bg="#f7f7f7" borderRadius={"5px"} color="blue">
          <ChatIcon />
          Live Chat
        </MenuItem>
        <MenuItem display={"flex"} p="10px"  flexDirection="column" border={"1px solid blue"} bg="#f7f7f7" borderRadius={"5px"} color="blue">
          <BiSupport />
          support.freshly.com
        </MenuItem>
        <MenuItem display={"flex"} p="10px"  flexDirection="column" border={"1px solid blue"} bg="#f7f7f7" borderRadius={"5px"} color="blue">
          <PhoneIcon />
          1-844-373-7459
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuOpt;
