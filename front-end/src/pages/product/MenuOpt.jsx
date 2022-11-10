import React from "react";
import {BiSupport} from "react-icons/bi"
import { ChevronDownIcon,ChatIcon,PhoneIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
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
      >
        File <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem><ChatIcon/> Live Chat</MenuItem>
        <MenuItem><BiSupport/>support.freshly.com</MenuItem>
        <MenuItem><PhoneIcon/>1-844-373-7459</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuOpt;
