import React from 'react'
import DPicker from './DPicker'
import MenuOpt from './MenuOpt'
import {Flex,Box,Button,Heading,Text} from "@chakra-ui/react"

const Navbar = () => {
  return (
    <>
    <Flex justify={"space-between"} >
        <Box>
            <Button>Back</Button>
        </Box>
        <Box>
        <Text fontWeight={"700"}>
          <DPicker/>
          
          </Text>    
        </Box>
        <Box>
         <MenuOpt/>
        </Box>
    </Flex>
    </>
  )
}

export default Navbar