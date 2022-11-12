import React from "react";
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

const Middle = () => {
  return (
    <Box m={"5rem"}>
      <Grid
        templateColumns={{lg:"repeat(2, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)",base:"repeat(1, 1fr)"}}
        templateRows={{lg:"repeat(5, 1fr)",md:"repeat(5, 1fr)",sm:"repeat(10, 1fr)",base:"repeat(10, 1fr)"}}
        gap={6}
        alignItems={"center"}
      >
        <GridItem w="100%">
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f12967e9b288185149d2ae_22_About_DeliciousGlutenFree_448x278.jpg"
          />
        </GridItem>
        <GridItem w="100%">
    
          <Text alignItems={"center"} fontSize={"30px"} fontWeight="700">
            Delicious Gluten-Free Options
          </Text>
          <Text width={"70%"}>
            Freshly offers a host of gluten-free meals, so you can avoid gluten
            without skimping on variety or great taste.
          </Text>
          <Text color={"blue"} as='u'>Learn More</Text>
        </GridItem>
        <GridItem w="100%">
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1296de1383751f4bef12c_22_About_SmartNutrition_448x278.jpg"
          />
        </GridItem>
        <GridItem w="100%">
          {" "}
          <Text fontSize={"30px"} fontWeight="700">
            Smart Nutrition
          </Text>
          <Text width={"70%"}>
            Freshly chefs use clever swaps and sneaky veggies to craft meals
            with unexpected twists—so every bite is as nutritious as it is
            delicious.
          </Text>
          <Text color={"blue"} as='u'>Learn More</Text>

        </GridItem>
        <GridItem w="100%">
          {" "}
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6155ec8c50610d16a9df5045_Purely_Plant_Unwrapped_Burrito%20(1).jpg"
          />
        </GridItem>
        <GridItem w="100%">
          {" "}
          <Text fontSize={"30px"} fontWeight="700">
            Introducing: Purely Plant
          </Text>
          <Text width={"70%"}>
            Our Purely Plant lineup offers seriously satisfying meals featuring
            our new plant-based protein.
          </Text>
          <Text color={"blue"} as='u'>Learn More</Text>

        </GridItem>
        <GridItem w="100%">
          {" "}
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f129696f38a1cf4b505a42_22_About_OfficialFreshlyApp_448x278.jpg"
          />
        </GridItem>
        <GridItem w="100%">
          <Text fontSize={"30px"} fontWeight="700">
            The Official Freshly App
          </Text>
          <Text width={"70%"}>
            {" "}
            Our app makes it easy to choose your meals, track deliveries, and
            chat with us 24/7
          </Text>
          <Text color={"blue"} as='u'>Learn More</Text>

        </GridItem>
        <GridItem w="100%">
          {" "}
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1296bc7759e4ab7ad7e82_22_About_ManageDietaryPreferences_448x278.jpg"
          />
        </GridItem>
        <GridItem w="100%">
          {" "}
          <Text fontSize={"30px"} fontWeight="700">
            Manage your dietary preferences
          </Text>
          <Text width={"70%"}>
            Dairy-Free? Gluten-Free? Soy-Free? No problem. With Freshly, you’re
            always in control.
          </Text>
          <Text color={"blue"} as='u'>Learn More</Text>

        </GridItem>
      </Grid>
    </Box>
  );
};
export default Middle;
{
  /* <Flex flexDirection={"column"} gap="1rem">
        <Box display="flex" gap="1rem" justifyContent={"center"}>
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f12967e9b288185149d2ae_22_About_DeliciousGlutenFree_448x278.jpg"
          />
          <Flex
            flexDirection={"column"}
            alignContent="center"
            justifyContent={"center"}
          >
            <Text fontSize={"30px"} fontWeight="700">
              Delicious Gluten-Free Options
            </Text>
            <Text width={"70%"}>
              Freshly offers a host of gluten-free meals, so you can avoid
              gluten without skimping on variety or great taste.
            </Text>
          </Flex>
        </Box>
        <Box display="flex" gap="1rem" justifyContent={"center"}>
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1296de1383751f4bef12c_22_About_SmartNutrition_448x278.jpg"
          />
          <Flex
            flexDirection={"column"}
            alignContent="center"
            justifyContent={"center"}
          >
            <Text fontSize={"30px"} fontWeight="700">
              Smart Nutrition
            </Text>
            <Text width={"70%"}>
              Freshly chefs use clever swaps and sneaky veggies to craft meals with unexpected twists—so every bite is as nutritious as it is delicious.
            </Text>
          </Flex>
        </Box>
        <Box display="flex" gap="1rem" justifyContent={"center"}>
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6155ec8c50610d16a9df5045_Purely_Plant_Unwrapped_Burrito%20(1).jpg"
          />
          <Flex
            flexDirection={"column"}
            alignContent="center"
            justifyContent={"center"}
          >
            <Text fontSize={"30px"} fontWeight="700">
              Introducing: Purely Plant
            </Text>
            <Text width={"70%"}>
              Our Purely Plant lineup offers seriously satisfying meals
              featuring our new plant-based protein.
            </Text>
          </Flex>
        </Box>
        <Box display="flex" gap="1rem" justifyContent={"center"}>
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f129696f38a1cf4b505a42_22_About_OfficialFreshlyApp_448x278.jpg"
          />
          <Flex
            flexDirection={"column"}
            alignContent="center"
            justifyContent={"center"}
          >
            <Text fontSize={"30px"} fontWeight="700">
              The Official Freshly App
            </Text>
            <Text width={"70%"}>
              {" "}
              Our app makes it easy to choose your meals, track deliveries, and
              chat with us 24/7
            </Text>
          </Flex>
        </Box>
        <Box display="flex" gap="1rem" justifyContent={"center"}>
          <Image
            rounded={"lg"}
            width={"500px"}
            length={"420px"}
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1296bc7759e4ab7ad7e82_22_About_ManageDietaryPreferences_448x278.jpg"
          />
          <Flex
            flexDirection={"column"}
            alignContent="center"
            justifyContent={"center"}
          >
            <Text fontSize={"30px"} fontWeight="700">
              Manage your dietary preferences
            </Text>
            <Text width={"70%"}>
              Dairy-Free? Gluten-Free? Soy-Free? No problem. With Freshly,
              you’re always in control.
            </Text>
          </Flex>
        </Box>
      </Flex> */
}
