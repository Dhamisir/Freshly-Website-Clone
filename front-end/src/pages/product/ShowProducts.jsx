import { Box, Heading, Image, Grid, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { cartAdd, cartShow } from '../../redux/cart/cart.action'
import { getproducts } from '../../redux/products/product.actions'

const ShowProducts = () => {
  const products = useSelector((store) => store.product.data)
  const { isAuth, token } = useSelector(store => store.userLogin);
  const { cart } = useSelector(store => store.cartItems);
  const dispatch = useDispatch()
  // console.log(products)

  useEffect(() => {
    dispatch(getproducts())
    dispatch(cartShow({ token: token }))
  }, [])

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  const checkCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId == id) {
        return true
      }
    }
    return false;
  }

  return (
    <>
      <Grid gridTemplateColumns={{ lg: "repeat(4,1fr)", md: "repeat(3,1fr)", sm: "repeat(2,1fr)", base: "repeat(1,1fr)" }} justifyContent="center" width={"90%"} margin="auto" gap="20px" alignContent={"center"}>

        {products.map((el) => (
          <Box boxShadow={"lg"} p="5px" rounded="lg" key={el._id}>
            <Image borderRadius={"10px"} width={"300px"} height="250px" src={el.img[0]} />
            <Text>{el.description}</Text>
            <Flex justifyContent={"space-between"}>
              <Heading size={"sm"}>Price - $ {el.price}</Heading>
              <Heading size={"sm"}>Rating - {el.rating}</Heading>
            </Flex>
            {
              checkCart(el._id) ? (
                <Button disabled={true} m={"10px"} colorScheme={"blue"} onClick={() => {
                  dispatch(cartAdd({ token: token, productId: el._id }))
                }}>Add To Cart</Button>
              ) :
                (
                  <Button disabled={false} m={"10px"} colorScheme={"blue"} onClick={() => { dispatch(cartAdd({ token: token, productId: el._id })) }}>Add To Cart</Button>
                )
            }
          </Box>
        ))}

      </Grid>
    </>
  )
}

export default ShowProducts