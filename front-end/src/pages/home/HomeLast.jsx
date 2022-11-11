import React from "react";
import {
  Box,
  Flex,
  Image,
 
} from "@chakra-ui/react";
import "./Home.css";
const HomeLast = () => {
  return (
    <Box display={{lg:"block",md:'block',sm:'none',base:"none"}}>
      <Flex h={'200px'} bg={"#f7f7f7"}  justifyContent={"space-around"}>

          <Image   width='  13%'
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e435aee2e3a4ab03e6f_The_Huffington_Post_logo.svg"
            alt="Dan Abramov"
          />
    
     
          <Image  width='  13%'
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e412d98cd166a6c84e6_logo-header.64f3bdc15b1f321829f9f30c7853a1469f469d71.svg"
            alt="Dan Abramov"
          />
     
          <Image  width='  13%'
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e436b26e00a240533b1_Entrepreneur-01.svg"
            alt="Dan Abramov"
          />
      
          <Image  width='  13%'
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e432759db28ffaf924f_w-g-logo-black.svg"
            alt="Dan Abramov"
          />
        
          <Image  width='  13%'
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523f552759db186baf93d2_techcrunch-seeklogo.com%20%5BConverted%5D.svg"
            alt="Dan Abramov"
          />
       
          <Image  width='  13%'
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e434bbecc1909457f48_logo-header.aeb2e510354d524c42a87c5d0a97d0a73c5d7581.svg"
            alt="Dan Abramov"
          />
       
      </Flex>
    </Box>
  );
};

export default HomeLast;
