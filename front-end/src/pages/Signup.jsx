import React from 'react'
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Stack,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { signupUser } from '../redux/userSignup/userSignup.action';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const Signup = () => {
    const { isAuth, isError } = useSelector(store => store.userSignup)
    const dispatch = useDispatch();
    // console.log(isAuth, token, isError, process.env.REACT_APP_MAIN_URL)
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    if (isAuth) {
        return <Navigate to="/login" />
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form)
        dispatch(signupUser(form))
    };

    return (
        <div>
            <Navbar />
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
            >
                <Stack
                    spacing={6}
                    w={"full"}
                    maxW={"md"}
                    rounded={"xl"}
                    boxShadow={"lg"}
                    p={5}
                    my={12}
                    alignItems={"center"}
                >
                    <Image
                        src={
                            "https://user-images.githubusercontent.com/96005514/200858098-c931e48c-1a50-4347-ba06-62cf80e3593f.png"
                        }
                        width={"30%"}
                    />
                    <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                        User
                    </Heading>
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <FormControl id="email" isRequired pb={"20px"}>
                            <FormLabel fontSize={"18px"}>First name</FormLabel>
                            <Input
                                placeholder="first name"
                                _placeholder={{ color: "gray.500" }}
                                name="first_name"
                                type="text"
                                value={form.first_name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="email" isRequired pb={"20px"}>
                            <FormLabel fontSize={"18px"}>Last Name</FormLabel>
                            <Input
                                placeholder="last name"
                                _placeholder={{ color: "gray.500" }}
                                type="text"
                                name="last_name"
                                value={form.last_name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="email" isRequired pb={"20px"}>
                            <FormLabel fontSize={"18px"}>Email address</FormLabel>
                            <Input
                                placeholder="your-email@gmail.com"
                                _placeholder={{ color: "gray.500" }}
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired pb={"20px"}>
                            <FormLabel fontSize={"18px"}>Password</FormLabel>
                            <Input type="password" name="password"
                                value={form.password}
                                onChange={handleChange} />
                        </FormControl>

                        <Stack spacing={6} alignItems={"center"}>
                            <Button
                                width={"200px"}
                                bg={"green.700"}
                                color={"white"}
                                _hover={{
                                    bg: "green.600",
                                }}
                                type="submit"
                            >
                                Signup
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Flex>
            {
                (isError) ? (<Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Wrong Credentials</AlertTitle>
                    <AlertDescription>Please Add Correct Email And Password</AlertDescription>
                </Alert>) : ""
            }
            <Footer />
        </div>
    );
}

export default Signup;