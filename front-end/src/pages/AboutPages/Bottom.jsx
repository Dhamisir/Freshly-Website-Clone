import React from 'react'
import { useNavigate } from 'react-router-dom';
import './about.css'
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
const Bottom = () => {
  const navigate= useNavigate()
  return (
   <Box textAlign={'center'} className='lastEnd'>
    <Flex justify={'center'}>

        <Button onClick={()=>navigate("/products")}  alignSelf={"center"} color={"blue"} m="1rem">See Our Plans & Menu</Button>
    </Flex>
   
   </Box>
  )
}

export default Bottom
