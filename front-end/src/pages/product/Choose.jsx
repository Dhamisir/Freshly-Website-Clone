import React from "react";
import { Flex, Box, Button, Heading, Text, Select } from "@chakra-ui/react";

const Choose = () => {

const sorting=()=>{
  console.log("sorting")
}

  return (
    <Box padding={"1rem"}>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        textAlign="center"
      >
        <Heading margin={"1rem"}>On the Menu</Heading>
        <Text width={{lg:"50%",md:"50%",base:"80%",sm:"80%"}} margin="auto">
          Whatever your lifestyle, Freshly’s got you covered—with gluten-free,
          dairy-free, plant-based, carb-smart, and calorie-conscious meal
          options! Our heat-&-eat breakfasts, low-lift lunches, and done-for-you
          dinners provide an effortless alternative to everyday cooking, with
          nutritious prepared meals delivered fresh to your door. Explore this
          week’s dishes and start eating better:
        </Text>
      </Box>
      <Box display={"flex"} mt="2rem" justifyContent="center" gap={"10px"}>
        <Text alignSelf={"center"} color="gray">Meal Category : </Text>


        {/* <Select alignSelf={"center"} id="sort" onChange={sorting} width={"20%"} size={{lg:"sm",base:"xs",sm:"xs"}}  placeholder="Select option">
          <option value="all meals">All Meals</option>
          <option value="low">Price (Low - High)</option>
          <option value="high">Price (High - Low)</option>
          {/* <option value="freshly fits">Freshly Fits</option>
          <option value="proteins & sides">Proteins & Sides</option> */}
        {/* </Select> */} 
      </Box>
    </Box>
  );
};

export default Choose;
