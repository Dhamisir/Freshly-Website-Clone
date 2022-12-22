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
import { useToast } from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { userLogin } from '../redux/userLogin/userLogin.action';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { useEffect } from 'react';

const Login = () => {
    const { isAuth, isError, isLoading, isErrormsg } = useSelector(store => store.userLogin)
    const dispatch = useDispatch();
    // console.log(isAuth, token, isError, process.env.REACT_APP_MAIN_URL)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const toast = useToast()
    let navigate = useNavigate();

    useEffect(() =>{
        if (isAuth) {
            toast({
                title : `Login Successfully`,
                status: "success",
                position: "top",
                isClosable: true,
                })
            // return <Navigate to="/" />
            navigate("/")
        }
         if(isError){
            toast({
                title : `${isErrormsg}`,
                status: "error",
                position: "top",
                isClosable: true,
                })
            
         }
    }, [isAuth, isError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin({ email: email, password: password }))
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
                            <FormLabel fontSize={"18px"}>Email address</FormLabel>
                            <Input
                                placeholder="your-email@gmail.com"
                                _placeholder={{ color: "gray.500" }}
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired pb={"20px"}>
                            <FormLabel fontSize={"18px"}>Password</FormLabel>
                            <Input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                        </FormControl>
                         <Stack spacing={6} alignItems={"center"}>
                            

{
                                isLoading? 
                                <Button
                                 isLoading 
                                loadingText='Loading'
                                width={"200px"}
                                bg={"green.700"}
                                color={"white"}
                                variant='outline'
                                  spinnerPlacement='start'
                                _hover={{
                                    bg: "green.600",
                                }}
                                type="submit"
                            >
                              
                                Login
                            </Button> 
                                
                                : 
                                <Button
                                // isLoading 
                            //    loadingText='Loading'
                               width={"200px"}
                               bg={"green.700"}
                               color={"white"}
                               // variant='outline'
                               //   spinnerPlacement='start'
                               _hover={{
                                   bg: "green.600",
                               }}
                               type="submit"
                           >
                             
                               Login
                           </Button>
}
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

export default Login