import React from 'react'
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
} from '@chakra-ui/react'


const Details = () => {
    return (
        <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
            <Td>millimetres (mm)</Td>
        </Tr>
    )
}

const Cart = () => {
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
                        <Details />
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