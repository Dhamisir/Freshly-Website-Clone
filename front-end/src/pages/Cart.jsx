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
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { cartDelete, cartShow } from '../redux/cart/cart.action'
import { Navigate } from 'react-router-dom'


const Details = ({ id, no, title, img, price, count, token }) => {
    const dispatch = useDispatch()
    return (
        <Tr>
            <Td>{no}</Td>
            <Td><Image src={img} /></Td>
            <Td>{title}</Td>
            <Td>${price}</Td>
            <Td>{count}</Td>
            <Td>${price * count}</Td>
            <Td onClick={() => { dispatch(cartDelete(id, { token: token })) }}><Button>Delete</Button></Td>
        </Tr>
    )
}

const Cart = () => {
    const { isAuth, token } = useSelector(store => store.userLogin);
    const { cart } = useSelector(store => store.cartItems);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartShow({ token: token }))
    }, [])

    if (!isAuth) {
        return <Navigate to="/login" />
    }

    console.log("cart", cart)

    return (
        <>
            <Navbar />
            <TableContainer w="90%" m="50px auto">
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Srno.</Th>
                            <Th>Product Image</Th>
                            <Th>Product Name</Th>
                            <Th>Price</Th>
                            <Th>Quantity</Th>
                            <Th>Subtotal</Th>
                            <Th>Edit</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cart.map((ele, i) => <Details id={ele._id} no={i + 1} img={ele.product.img[0]} price={ele.product.price} count={ele.count} title={ele.product.title} token={token} />)
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th textAlign="center" colSpan="6">Total Price</Th>
                            <Th textAlign="center">$ into</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <Center>
                <Button m="0px 10px" bg="#3167FF" colorScheme="white">Procide To Checkout</Button>
            </Center>
            <Footer />
        </>
    )
}

export default Cart