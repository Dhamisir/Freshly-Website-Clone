import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HomeWork = () => {
  return (
    <Box m={"5rem"}>
    <Heading textAlign={"center"}>
    How it works
    </Heading>
    <Flex justifyContent={"center"} gap={"1rem"} flexDirection={{lg:"row",md:"row",sm:"column",base:"column"}}>
  <Box p='4' display={"flex"} flexDirection="column" justifyContent={"center"} textAlign={"center"}>
   <Image w={"65%"} margin="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"/>
   <Heading size={"md"}>Choose Your Meals</Heading>
   <Text>Rotating menu of 50+ balanced dishes.</Text>
  </Box>
  <Box p='4' display={"flex"} flexDirection="column" justifyContent={"center"} textAlign={"center"}>
   <Image w={"65%"}  margin="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/63340f143fdc484b366c10db_Frame-1.svg"/>
   <Heading size={"md"}>We Cook & Deliver</Heading>
   <Text>Our meals are fully-cooked and sent fresh, not frozen.</Text>
  </Box>
  <Box p='4' display={"flex"} flexDirection="column" justifyContent={"center"} textAlign={"center"}>
   <Image w={"65%"} margin="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/63340f14700b0251d97f8865_Frame-3.svg"/>
   <Heading size={"md"}>Eat & Repeat</Heading>
   <Text>Change meals, skip a week or cancel at any time.</Text>
  </Box>
  <Box p='4' display={"flex"} flexDirection="column" justifyContent={"center"} textAlign={"center"}>
   <Image w={"65%"} margin="auto" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg"/>
   <Heading size={"md"}>Chill & Reheat</Heading>
   <Text>Refrigerate meals & reheat in 3 minutes.</Text>
  </Box>
 
</Flex>

    </Box>
  )
}

export default HomeWork