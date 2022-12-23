
import React from "react";
import {useState, useEffect} from "react";
import { Box, Button, Center, Grid, GridItem,  Image,Heading, Text,Spinner,TagLabel,Tag, Stack } from '@chakra-ui/react'





const Loading =() =>{

    const [loading,setLoading] = useState(false)

     useEffect(() =>{

       setLoading(true)

        setTimeout(() => {

     setLoading(false)

        },80000)
    })

     return(
    
        <div>
           <Stack width={"100%"} textAlign={"center"} margin={"auto"}
            padding={"50px"}>
         <Heading  as='h2' size='3xl' >Welcome to Freshly.com</Heading>
          <br/>
          <br/>
          <Heading as='h3' size='lg'>
          Checking if the site connection is secure
         </Heading>
          
           <br/>
           <br/>
          
           <Box textAlign={"center"}>
           <Spinner
           size='xl'
           thickness='4px'
           speed='0.65s'
           emptyColor='green.200'
           color='blue.500'
          
         />
          </Box>

       <br/>
      

         <Tag size='lg' colorScheme='green' borderRadius='full' textAlign={"center"}>
 
 <TagLabel>We are checking your web connection...</TagLabel>

</Tag>
<br/>
<br/>

<Text fontSize='lg'>www.freshly.com needs to review the security of the connection  </Text>
<br/>
<Text>   Did you know botnels can used to shutdown popular website.....needs to review the security of the connection </Text>
         
           
           </Stack>


           

         


        </div>

     )
}
export default Loading;