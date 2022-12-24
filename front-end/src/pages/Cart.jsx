import React, { useEffect } from 'react'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Grid,
    GridItem,
    Button,
    Center,
    Image,
    Alert,
    AlertIcon,
    useToast,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { AllDelete, cartAdd, cartDelete, cartShow, cartUpdate } from '../redux/cart/cart.action'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'



const Details = ({ id, no, title, img, price, count, token, productId }) => {
    const dispatch = useDispatch()
    return (
        <Tr>
            <Td textAlign="center">{no}</Td>
            <Td textAlign="center"><Image w="200px" src={img} /></Td>
            <Td textAlign="center">{title}</Td>
            <Td textAlign="center">${price}</Td>
            <Td textAlign="center"><Button onClick={() => { dispatch(cartUpdate(id, { token: token })) }} bg="#3167FF" colorScheme="white">-</Button><Button m="5px">{count}</Button><Button bg="#3167FF" colorScheme="white" onClick={() => { dispatch(cartAdd({ token: token, productId: productId })) }}>+</Button></Td>
            <Td textAlign="center">${price * count}</Td>
            <Td textAlign="center" onClick={() => { dispatch(cartDelete(id, { token: token })) }}><Button>Delete</Button></Td>
        </Tr>
    )
}


const Cart = () => {
    const { isAuth, token } = useSelector(store => store.userLogin);
    const { cart } = useSelector(store => store.cartItems);
    const totalCount = useRef(null);
    const totalPrice = useRef(null)
    const toast = useToast()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartShow({ token: token }))
    }, [])

    if (!isAuth) {
        return <Navigate to="/login" />
    }

    console.log("cart length", cart.length)

    const TableFormat = () => {
        const checkout = () => {
           
            toast({
                title : `Order Successfull !`,
                status: "success",
                position: "top",
                isClosable: true,
                })
            dispatch(AllDelete({ token: token }))
        }
        return (
            <>
                <TableContainer w="90%" m="50px auto">
                    <Table variant='striped' colorScheme='teal'>
                        <Thead>
                            <Tr>
                                <Th textAlign="center">Srno.</Th>
                                <Th textAlign="center">Product Image</Th>
                                <Th textAlign="center">Product Name</Th>
                                <Th textAlign="center">Price</Th>
                                <Th textAlign="center">Quantity</Th>
                                <Th textAlign="center">Subtotal</Th>
                                <Th textAlign="center">Edit</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                cart.map((ele, i) => <Details id={ele._id} no={i + 1} img={ele.product.img} price={ele.product.price} count={ele.count} productId={ele.productId} title={ele.product.title} token={token} />)
                            }
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th textAlign="center" colSpan="4">Total Price</Th>
                                <Th textAlign="center" colSpan="1">{
                                    totalCount.current = cart.reduce((acc, ele) => {
                                        return ele.count + acc
                                    }, 0)
                                }</Th>
                                <Th textAlign="center">$ {
                                    totalPrice.current = cart.reduce((acc, ele) => {
                                        // console.log(acc.count)
                                        return ele.count * ele.product.price + acc
                                    }, 0)
                                }</Th>
                                <Th textAlign="center" colSpan="1">${totalCount.current * totalPrice.current}</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
                <Center>
                    <Button m="0px 10px" bg="#3167FF" colorScheme="white" onClick={checkout}>Procide To Checkout</Button>
                </Center>
            </>
        )
    }

    return (
        <>
            <Navbar />
            {
                (typeof cart == "string") ? (
                    <Alert w="80%" m="50px auto" fontSize="xl" justifyContent="center" textAlign="center" status='warning'>
                        <Center>
                            <AlertIcon />
                            Cart Is Empty !
                        </Center>
                    </Alert>
                ) : <TableFormat />
            }
            <Footer />
        </>
    )
}

export default Cart