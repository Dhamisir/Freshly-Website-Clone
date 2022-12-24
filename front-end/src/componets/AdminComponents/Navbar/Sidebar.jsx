import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiStar, FiSettings } from "react-icons/fi";
import { BsFillCartFill, BsFillHddStackFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import NavItem from "./NavItem";
const LinkItems = [
  // { name: "Dashboard", icon: BsFillHddStackFill, link: "/admin" },
  { name: "Product", icon: BsFillCartFill, link: "/admin" },
  { name: "user", icon: FaUserAlt, link: "/admin/user" },
  { name: "Settings", icon: FiSettings, link: "/admin/setings" },
];

const Sidebar = () => {
  return (
    <div>
      <Box
        // pl={"20px"}
        display={{md :"none", lg : 'block'}}
        pr={"20px"}
        h={"100%"}
        transition="3s ease"
        boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        // w={{ base: "50%", md: "60%", lg: "100%" }}
        width={["30%", "20%", "16%"]}
        pos="fixed"
        // h="full"
      >
        <Image
          mt={"-20"}
          src={
            "https://user-images.githubusercontent.com/96005514/200858098-c931e48c-1a50-4347-ba06-62cf80e3593f.png"
          }
          width={"65%"}
          pl={"12"}
        />
        {/* <Text>Logo</Text> */}
        <Box textAlign={"center"} fontSize={"18px"}>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              name={link.name}
              links={link.link}
            ></NavItem>
          ))}
        </Box>
      </Box>
    </div>
  );
};
export default Sidebar;
