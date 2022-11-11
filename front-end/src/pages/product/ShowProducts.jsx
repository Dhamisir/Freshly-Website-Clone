import { Box, Heading, Image,Grid,Text , Flex, Button} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../../redux/products/product.actions'

const ShowProducts = () => {
    const products= useSelector((store)=>store.product.data)
  const dispatch = useDispatch()
// console.log(products)
  useEffect(()=>{
    dispatch(getproducts())
  },[])
console.log(products)
  return (
    <>
    <Grid gridTemplateColumns={{lg:"repeat(4,1fr)",md:"repeat(3,1fr)",sm:"repeat(2,1fr)",base:"repeat(1,1fr)"}} justifyContent="center" width={"90%"} margin="auto" gap="20px">
 {products.map((el)=>(<Box boxShadow={"lg"} p="5px" rounded="lg" key = {el._id}>
       {/* <Flex flexDirection={"column"}> */}
    <Image borderRadius={"10px"} width={"300px"} height="250px" src= {el.img[0]}/>
    <Text>{el.description}</Text>
    <Flex justifyContent={"space-between"}>
    <Heading size={"sm"}>Price - $ {el.price}</Heading>
    <Heading size={"sm"}>Rating - {el.rating}</Heading>

    </Flex>
    <Button m={"10px"} colorScheme={"blue"}>Add To Cart</Button>
       {/* </Flex> */}
 </Box>))}
    </Grid>
    </>
  )
}

export default ShowProducts