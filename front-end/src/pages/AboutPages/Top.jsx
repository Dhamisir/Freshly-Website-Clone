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
import React from "react";

const Top = () => {
  return (
    <Box textAlign={"center"}>
      <Heading
        size={{ lg: "2xl", md: "xl", base: "md", sm: "md" }}
        m={{ lg: "5rem", md: "4rem", base: "2rem", sm: "3rem" }}
      >
        About Freshly
      </Heading>
      <Heading>Heat-and-eat in 3 minutes or less</Heading>
      <Text mb={"2rem"}>
        See just how easy it is to prepare a chef-cooked Freshly meal
      </Text>
      <Heading>Our Food Philosophy</Heading>
      <Text>
        Our meals aren’t just ready in minutes... or just delicious... or just
        nutritious. They’re all three.
      </Text>
      <Box m="5rem">
        <Grid
          templateColumns={{lg:"repeat(3,1fr)",md:"repeat(3,1fr)",sm:"repeat(1,1fr)",base:"repeat(1,1fr)"}}
          width={"75%"}
          m={"auto"}
          gap={6}
          justifyContent={"center"}
          alignItems="center"
        >
          <GridItem>
            <Flex justify={"center"}>
              <Image
                width={"60%"}
                src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f0020df16335dbda1b6_gp-less-sugar-nocopy%402x.png"
              />
            </Flex>
            <Heading size={"md"}>Less processed</Heading>
            <Text>Only thoughtful ingredients</Text>
          </GridItem>
          <GridItem>
            <Flex justify={"center"}>
              <Image
                width={"60%"}
                src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00f6ed944c5e2f02a3_gp-less-processed-nocopy%402x.png"
              />
            </Flex>
            <Heading size={"md"}>
Less processed</Heading>
            <Text>Only thoughtful ingredients</Text>
          </GridItem>
          <GridItem>
            <Flex justify={"center"}>
              <Image
                width={"83%"}
                src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00a02e38947ec7759a_gp-more-nutrients-nocopy%402x.png"
              />
            </Flex>
            <Heading size={"md"}>
More nutrients</Heading>
            <Text>Simple swaps and sneaky veggies</Text>
          </GridItem>
        </Grid>
      </Box>
      <Button p={"10px"} colorScheme={"blue"}>
        Learn More
      </Button>
    </Box>
  );
};

export default Top;

{
  /* <Flex
    gap={"20px"}
    justify={"center"}
    flexDirection={{ lg: "row", md: "row", base: "column", sm: "colmun" }}
    textAlign="center"
    m={"5rem"}
    boxShadow="lg"
    rounded={"lg"}
    padding="20px"

  >
    <Box >
      <Flex justify={"center"} >
      <Image
        width={"50%"}
        src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f0020df16335dbda1b6_gp-less-sugar-nocopy%402x.png"
      /></Flex>
      <Heading size={"md"}>Less sugar</Heading>
      <Text>Sweet, naturally</Text>
    </Box>
    <Box>
      <Flex justify={"center"}>
      <Image
        width={"50%"}
        src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00f6ed944c5e2f02a3_gp-less-processed-nocopy%402x.png"
      /></Flex>
      <Heading size={"md"}>Less processed</Heading>
      <Text>Only thoughtful ingredients</Text>
    </Box>
    <Box>
    <Flex justify={"center"}>
      <Image
        width={"50%"}
        src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00a02e38947ec7759a_gp-more-nutrients-nocopy%402x.png"
      />
      </Flex >
      <Heading size={"md"}>More nutrients</Heading>
      <Text>Simple swaps and sneaky veggies</Text>
    </Box>
  </Flex> */
}
