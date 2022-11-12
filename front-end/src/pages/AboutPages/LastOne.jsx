import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
const LastOne = () => {
    const navigate = useNavigate()
  return (
    <Box>
      <Box textAlign={"center"} m="5rem">
        <Heading m={"1rem"}>Why Choose Freshly?</Heading>
        <Text mb={"2rem"} width="60%" margin={"auto"}>
          When it comes to meal-time, you’ve got a lot of options. Some offer
          convenience, some offer nutrition, and some offer the foods you crave.
          We offer all three.
        </Text>
      </Box>
      <Grid templateColumns={{lg:"repeat(3, 1fr)",md:"repeat(3, 1fr)",sm:"repeat(1, 1fr)",base:"repeat(1, 1fr)"}} gap={6} width="70%" margin ="auto">
        <GridItem w="100%" >
            <Image src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61f3e0e09c16d7ce05133094_22_BetterThanMealKit_LP_Hero_1440x800.jpg"/>
            <Text fontSize={"18px"} fontWeight={"600"} textAlign={'center'} width="80%" margin={"auto"}>Why Freshly is Better Than Meal Kits</Text>
        </GridItem>
        <GridItem w="100%"  >
            <Image src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61f3e10f43743f2052a4a036_22_BetterThanCooking_LP_Hero_1440x800.jpg"/>
            <Text fontSize={"18px"} fontWeight={"600"} textAlign={'center'} width="80%" margin={"auto"}>Why Freshly is Better Cooking</Text>
        </GridItem>
        <GridItem w="100%"  >
    <Image src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61f3e142a8c3d3cd7a364af1_22_LeaveTakeoutLP_Hero_1440x800.jpg"/>
    <Text fontSize={"18px"} fontWeight={"600"} textAlign={'center'} width="80%" margin={"auto"}>Three Reasons to Leave For Freshly</Text>
        </GridItem>
      </Grid>
      <Flex flexDirection={"column"} justify={"center"} m="5rem">

      <Heading textAlign={"center"}>Ready to live Freshly?</Heading>
      <Button m={"2rem"} w="max-content" alignSelf={"center"} colorScheme={"blue"} onClick={()=>navigate("/products")} >Get Started</Button>
      </Flex>
    </Box>
  );
};

export default LastOne;
