import { Box, Center, Flex, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <Grid p="50px" templateColumns={{ base: "repeat(1,1fr)", md: "repeat(4,1fr)" }}>
                <GridItem w='150px' h='10' justifySelf={{ base: "center", md: "left" }}>
                    <Image src='https://user-images.githubusercontent.com/96005514/200733048-13b7c9b1-a830-4bff-97a8-84f50f4ab359.png' />
                </GridItem>
                <Box textAlign="center">
                    <Text p="5px" fontSize="lg" fontWeight="bold">Company</Text>
                    <Text p="5px">Careers</Text>
                    <Text p="5px">Contact Us</Text>
                    <Text p="5px">Press</Text>
                    <Text p="5px">Terms</Text>
                    <Text p="5px">Privacy</Text>
                    <Text p="5px">Affilates</Text>
                    <Text p="5px">Partnerships</Text>
                </Box>
                <Box textAlign="center">
                    <Text p="5px" fontSize="lg" fontWeight="bold">Learn More</Text>
                    <Text p="5px">Plans & Menu</Text>
                    <Text p="5px">Why Freshy?</Text>
                    <Text p="5px">Gifts</Text>
                    <Text p="5px">FAQs</Text>
                    <Text p="5px">Blog</Text>
                    <Text p="5px">Student</Text>
                </Box>
                <Box textAlign="center">
                    <Text p="5px" fontSize="lg" fontWeight="bold">Learn More</Text>
                    <Flex m="10px 0px" justifyContent="center">
                        <Link m="0px 10px" href=''><FaFacebookF /></Link>
                        <Link m="0px 10px" href=''><FaInstagram /></Link>
                        <Link m="0px 10px" href=''><FaTwitterSquare /></Link>
                        <Link m="0px 10px" href=''><FaPinterestSquare /></Link>
                    </Flex>
                    <Flex flexDirection="column" alignItems="center" m="10px" >
                        <Link href='https://apps.apple.com/app/apple-store/id1195648107' isExternal>
                            <Image p="5px 0px" w="120px" src='https://assets-global.website-files.com/5d03b4e130118314af624b20/5d6439d4fb92e7630e46976b_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' />
                        </Link>
                        <Link href='https://play.google.com/store/apps/details?id=com.freshly.meal&utm_source=website&utm_campaign=footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1' isExternal>
                            <Image p="5px 0px" w="120px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d643dd558306bfe1df5ef8b_google-play-badge-p-500.png" />
                        </Link>
                    </Flex>
                </Box>
            </Grid>
        </>
    )
}

export default Footer