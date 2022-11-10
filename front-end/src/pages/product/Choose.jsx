import React from 'react'
import { Flex, Box, Button, Heading, Text } from "@chakra-ui/react";
import SortDrawer from './SortDrawer';
const Choose = () => {
  return (
   <Box padding={"1rem"}>
    <Flex justify={"space-between"}>
      <Box><Text fontWeight={"700"}>Choose Meals</Text></Box>
      <Box>
        <SortDrawer/>
      </Box>
    </Flex>
   </Box>
  )
}

export default Choose