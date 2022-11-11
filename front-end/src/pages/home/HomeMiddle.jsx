import { Box, Heading, Text, Flex, Image, Button } from "@chakra-ui/react";
import React from "react";
import "./Home.css";
const HomeMiddle = () => {
  return (
    <Box className="carrot">
      <Box
        width={"55%"}
        margin={"auto"}
        backgroundColor={"white"}
        mt={"1rem"}
        mb={"1rem"}
        p={"1rem"}
      >
        <Heading
          width={{ lg: "60%", md: "70%", base: "100%", sm: "100%" }}
          size={{ lg: "xl", md: "lg", sm: "lg", base: "lg" }}
          m={"10px"}
        >
          On the menu
        </Heading>
        <Text
          fontSize={{ lg: "md", md: "md", sm: "sm", base: "sm" }}
          m={"10px"}
        >
          Each Freshly meal is perfectly sized for 1 person to enjoy at 1
          sitting. Our fully-prepared meals are delivered fresh, and ready to
          eat in 3 minutes.
        </Text>
        <Flex
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
          flexWrap="wrap"
          gap="1.5rem"
          justifyContent={{
            lg: "center",
            md: "center",
            base: "center",
            sm: "center",
          }}
          mt={"2rem"}
          mb={"2rem"}
        >
          <Box
            className="animate"
            w={{ lg: "30%", md: "30%", base: "100%", sm: "100%" }}
          >
            <Image
              borderRadius={"20px"}
              src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dff2da0c2e1fb_635823f4ce4929328b1f96f9_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg"
            />
            <Heading size={"sm"}>BBQ Bison Burger*</Heading>
            <Text fontSize={"xm"}>with Masterful Mac & Cheese</Text>
            <Text fontSize={"xs"}>610 Cal</Text>
          </Box>

          <Box
            className="animate"
            w={{ lg: "30%", md: "30%", base: "100%", sm: "100%" }}
          >
            <Image
              borderRadius={"20px"}
              src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8cd4f9d87ba86916_635823f4ce492977d91f974a_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg"
            />
            <Heading size={"sm"}>Sausage Baked Penne</Heading>
            <Text fontSize={"xm"}>with Sautéed Zucchini & Spinach</Text>
            <Text fontSize={"xs"}>470 Cal</Text>
          </Box>

          <Box
            className="animate"
            w={{ lg: "30%", md: "30%", base: "100%", sm: "100%" }}
          >
            <Image
              borderRadius={"20px"}
              src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb5ae22f4680ff53d8_635823f4ce492947161f9738_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg"
            />
            <Heading size={"sm"}>Homestyle Chicken</Heading>
            <Text fontSize={"xm"}>with Masterful Mac & Cheese</Text>
            <Text fontSize={"xs"}>560 Cal</Text>
          </Box>

          <Box
            className="animate"
            w={{ lg: "30%", md: "30%", base: "100%", sm: "100%" }}
          >
            <Image
              borderRadius={"20px"}
              src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8b1f5aa9b139be56_635823f4ce492904901f973e_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg"
            />
            <Heading size={"sm"}>Cauliflower Shell Beef Bolognese</Heading>
            <Text fontSize={"xm"}>
              with Nonna’s Soffritto & Italian Cheeses
            </Text>
            <Text fontSize={"xs"}>490 Cal</Text>
          </Box>

          <Box
            className="animate"
            w={{ lg: "30%", md: "30%", base: "100%", sm: "100%" }}
          >
            <Image
              borderRadius={"20px"}
              src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb7be30f1df3054aa2_635823f4ce492958261f9755_production-meal-image-29e2b6e1-12af-405d-8b33-91e19b2a0fef.jpeg"
            />
            <Heading size={"sm"}>Tricolor Beef Lasagna</Heading>
            <Text fontSize={"xm"}>with Brown-Rice & Spinach Pasta Sheets</Text>
            <Text fontSize={"xs"}>640 Cal</Text>
          </Box>

          <Box
            className="animate"
            w={{ lg: "30%", md: "30%", base: "100%", sm: "100%" }}
          >
            <Image
              borderRadius={"20px"}
              src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb684a20a3c8466513_635823f4ce492969991f9772_production-meal-image-25f9ce2d-ca21-499e-a140-8d59b4733ec2.jpeg"
            />
            <Heading size={"sm"}>Flame-Seared Top Blade Steak</Heading>
            <Text fontSize={"xm"}>
              with Green Pea Risotto & Parmesan Crumble
            </Text>
            <Text fontSize={"xs"}>610 Cal</Text>
          </Box>
        </Flex>
        <Flex justify={"center"} mb={"1.5rem"}>
          <Button
      colorScheme={"blue"}
            p={"1.5rem"}
           
            width={"100%"}
          >
            View Plans & Menu
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeMiddle;
