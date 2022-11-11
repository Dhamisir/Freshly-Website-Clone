import React from 'react'
import { Box, Heading, Text, Flex, Image, Button } from "@chakra-ui/react";

const HomeBottom = () => {
  return (
    <Box mt={"5rem"} mb={"5rem"}>
        <Box display={"flex"} flexDirection="column" alignContent={"center"} justifyContent={"center"} textAlign={"center"} mt={"5rem"} mb={"2rem"}>
        <Image width={"15%"} alignSelf="center" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" />
    <Heading margin={"1rem"}>
    Flexible plans that fit your life
    </Heading>
    <Text width={"60%"} margin={"auto"}>We offer anywhere from 4–12 meals per week, with meals as low as $9.58 each. The bigger your box, the more you’ll save—and you can always pause or change your plan at any time.</Text>
        </Box>
        <Flex gap='1rem' justify='center' textAlign={"center"}p="2rem"   flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}>
  <Box >
    <Image  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals.png"/>
    <Heading color={"teal"} size="md">4-5 Meals</Heading>
  </Box>
  <Box >
    <Image  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals.png"/>
    <Heading color={"teal"} size="md">6-7 Meals</Heading>
  </Box>
  <Box >
    <Image  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals.png"/>
    <Heading color={"teal"} size="md">8-9 Meals</Heading>
  </Box>
  <Box >
    <Image  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals.png"/>
    <Heading color={"teal"} size="md">10-11 Meals</Heading>
  </Box>
  <Box >
    <Image  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals.png"/>
    <Heading color={"teal"} size="md">12 Meals</Heading>
  </Box>
 
</Flex>
<Text width={"60%"} textAlign="center" margin={"auto"}>Shipping and tax added at checkout. Prices are rounded for your convenience.</Text>
<Flex justifyContent={"center"}>
<Button colorScheme={"blue"} p="1.5rem" m="1.5rem" fontSize={"lg"}>Sign Up Now</Button>

</Flex>
    </Box>
  )
}

export default HomeBottom