import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { GiChainedArrowHeads } from 'react-icons/gi';
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';

const Contact = () => {
    return (
        <>
            <Navbar />
            {/* banner */}
            <Box h="500px" backgroundImage="https://user-images.githubusercontent.com/96005514/200758342-57b63e28-4326-40c1-98af-74931aca02e3.png">
                <Center h="100%">
                    <Box borderRadius="20px" m="10px" p="20px" w="500px" bg="white">
                        <Heading>How can we help?</Heading>
                        <Text>Our Customer Care agents are available every day from 6am-midnight ET to help answer delivery questions, menu inquiries, and everything in between! Select your preferred contact method below to get started!</Text>
                        <Button m="20px 0px 0px 0px" bg="#3167FF" colorScheme="white">Get In Touch</Button>
                    </Box>
                </Center>
            </Box>
            {/* Customer Support */}
            <Heading m="50px" textAlign="center">Customer Support</Heading>

            <Box m="10px auto" bg="#F7F7F7" w={{ base: "100%", md: "50%" }} p="30px">
                <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center">
                    <Box justifySelf="center">
                        <AiOutlineQuestionCircle fontSize="50px" />
                    </Box>
                    <Box m="20px">
                        <Heading>Support Center</Heading>
                        <Text m="10px 0px">Have questions? Get quick answers with our FAQs</Text>
                    </Box>
                    <Button bg="#3167FF" colorScheme="white">Find Answeres</Button>
                </Flex>
            </Box>

            <Box m="10px auto" bg="#F7F7F7" w={{ base: "100%", md: "50%" }} p="30px">
                <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center">
                    <Box justifySelf="center">
                        <AiOutlineMail fontSize="50px" />
                    </Box>
                    <Box m="20px">
                        <Heading>Email Us</Heading>
                        <Text m="10px 0px">For any other inquiries please email us</Text>
                    </Box>
                    <Button bg="#3167FF" colorScheme="white">Email Us</Button>
                </Flex>
            </Box>

            <Box m="10px auto" bg="#F7F7F7" w={{ base: "100%", md: "50%" }} p="30px">
                <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center">
                    <Box justifySelf="center">
                        <BsFillPhoneFill fontSize="50px" />
                    </Box>
                    <Box m="20px">
                        <Heading>Call or Text Us</Heading>
                        <Text m="10px 0px">1-844-373-7459</Text>
                    </Box>
                    <Button bg="#3167FF" colorScheme="white">Call Us</Button>
                </Flex>
            </Box>

            {/* Other Inquiries */}
            <Heading m="50px" textAlign="center">Other Inquiries</Heading>
            <Box m="10px auto" bg="#F7F7F7" w={{ base: "100%", md: "50%" }} p="30px">
                <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center">
                    <Box justifySelf="center">
                        <GiChainedArrowHeads fontSize="50px" />
                    </Box>
                    <Box m="20px">
                        <Heading>Marketing & Advertising</Heading>
                        <Text m="10px 0px">Please email us at                     marketing@freshly.com</Text>
                    </Box>
                    <Button bg="#3167FF" colorScheme="white">Email Us</Button>
                </Flex>
            </Box>
            <Footer />
        </>
    )
}

export default Contact