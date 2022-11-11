import React from "react";
import { Box, Heading, Text, Flex, Image, Button } from "@chakra-ui/react";
import "./Home.css";

const Homebottom2 = () => {
  return (
    <Box className="bottom2" mt={"5rem"} mb={"5rem"}>
     <Flex justifyContent={{lg:"left",md:"left",sm:"center",base:"center"}}>
        <Box bg={"white"} p={"3rem"} boxShadow="md" rounded="md">
          <Heading
            size={{ lg: "2xl", md: "xl", sm: "md", base: "md" }}
            width={{ lg: "80%", md: "80%", base: "100%", sm: "100%" }}
            m={"8px"}
          >
          We believe eating right should be easy for everyone.
          </Heading>
         
          <Text>
          Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.
          </Text>
          <Button
         colorScheme={"blue"}
            p={{ lg: "1.5rem", md: "1.3rem", sm: "1rem", base: "0.7rem" }}
            m={{ lg: "1.5rem", md: "1.3rem", sm: "1rem", base: "1rem" }}
            fontSize={"lg"}
          >
           Learn More
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Homebottom2;

{
  /* <Button
color={"white"}
backgroundColor={"blue"}
p={{ lg: "1.5rem", md: "1.3rem", sm: "1rem", base: "0.7rem" }}
m={{ lg: "1.5rem", md: "1.3rem", sm: "1rem", base: "0rem" }}
fontSize={"lg"}
>
Learn More
</Button> */
}
{
  /* <Heading
  m={"8px"}
  size={{ lg: "2xl", md: "xl", sm: "md", base: "md" }}
  width={{ lg: "80%", md: "80%", base: "100%", sm: "100%" }}
>
  We believe eating right should be easy for everyone.
</Heading> */
}
