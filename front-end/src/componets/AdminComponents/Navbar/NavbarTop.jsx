import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { adminLogout } from "../../../redux/adminLogin/adminLogin.action";
const NavbarTop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, data } = useSelector((store) => store.adminAuth);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      dispatch(adminLogout());
      // he wants to logout
    } else {
      // he wants to login
      Navigate("/admin");
    }
  };
  return (
    <Flex
      //   ml={{ base: 0, md: 60 }}
  
      ml={60}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      justifyContent={{ lg: "flex-end", md: "flex-end" }}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={data.avtar} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">
                    {data.first_name} {data.last_name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {data.roall}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList borderColor={"gray.700"}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLoginClick}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default NavbarTop;
