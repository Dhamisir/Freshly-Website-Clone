import { Box, Button, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import Faq from './Faq'


const Service = ({ img, step, title, desc }) => {
    return (
        <GridItem w='100%' p="10px" textAlign="center">
            <Center>
                <Image src={img} />
            </Center>
            <Text fontSize="xl"><b>{step}</b></Text>
            <Text fontSize="2xl">{title}</Text>
            <Text>{desc}</Text>
        </GridItem>
    )
}

const faqData = [
    {
        title: "I’m a new customer. How do I redeem my gift card?",
        details: "Redeem your Gift Card online at freshly.com/gifts. When redeemed and if the order amount is greater than the amount on your gift card, your provided payment method will be charged for the difference. If the gift card balance exceeds the amount of your order, your remaining gift card balance will be converted to stored credit and automatically applied to future orders. If your order amount and gift card have equal value, then the full gift card balance will be used on the order. By using this card, you agree to these Terms & Conditions and Freshly reserves the right to modify, replace, or suspend gift cards at any time. This Gift Card does not expire and is not reloadable. No replacement if lost or stolen. Not valid on prior purchases, refer a friend programs, applicable taxes, shipping fees or redeemable for cash or cash equivalents."
    },
    {
        title: "I’m a current customer. How do I redeem my gift card?",
        details: "Redeem your Gift Card online in your Account Settings by logging into your Freshly account at freshly.com or in the Freshly app. When redeemed and if the order amount is greater than the amount on your gift card, your provided payment method will be charged for the difference. If the gift card balance exceeds the amount of your order, your remaining gift card balance will be converted to stored credit and automatically applied to future orders. If your order amount and gift card have equal value, then the full gift card balance will be used on the order. By using this card, you agree to these Terms & Conditions and Freshly reserves the right to modify, replace, or suspend gift cards at any time. This Gift Card does not expire and is not reloadable. No replacement if lost or stolen. Not valid on prior purchases, refer a friend programs, applicable taxes, shipping fees or redeemable for cash or cash equivalents."
    },
    {
        title: "How do I purchase a gift card?",
        details: "Click “Buy Gift Card” and follow the instructions to purchase."
    },
    {
        title: "Can I purchase more than one gift card?",
        details: "Yes! You can purchase up to 10 gift cards per order. Please note: the maximum gift card value for one (1) gift card is $500, and the maximum value for all gift cards in your shopping cart is $5,000."
    },
    {
        title: "Do I need a Freshly subscription to purchase a gift card?",
        details: "No, you do not need to have a Freshly subscription in order to purchase a gift card."
    },
    {
        title: "Does the recipient of the gift card need a Freshly subscription to redeem their gift?",
        details: "No, your gift card’s recipient does not need to have a Freshly subscription in order to redeem. Upon redeeming their gift card, they’ll be prompted to create an account, which will jump start their subscription."
    },
    {
        title: "What if my gift card amount is greater than my order total?",
        details: "If the gift card balance exceeds the amount of your order when redeemed, your remaining gift card balance will be converted to stored credit and automatically applied to future orders. If your order amount is greater than the amount on your gift card, your provided payment method will be charged for the difference. If your order amount and gift card have equal value, then the full gift card balance will be used on the order."
    }
]

const Gift = () => {
    return (
        <>
            <Navbar />
            <Grid w="90%" m="50px auto" templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} justifyContent="center" alignItems="center" textAlign="center" gap={6} alignContent="center">
                <GridItem w='100%' justifySelf="center" textAlign="center" alignSelf="center">
                    <Heading>Enjoy the Gift of Effortless Meals</Heading>
                    <Button m="10px" bg="#3167FF" colorScheme="white">Buy Products Now</Button><br />
                    <Button m="10px" border="2px solid #3167FF" bg="white" color="blue.500">Buy Products Now</Button>
                </GridItem>
                <GridItem w='100%' display={{ base: "none", md: "block" }}>
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62683001aedd80475a0b4dfb_Gifts_Img_1%20(1).jpg" />
                </GridItem>
            </Grid>
            <Heading textAlign="center">Give the Greatest Gift Ever</Heading>
            <Text m="10px 0px" fontSize="lg" textAlign="center">(Yes, It's Freshly.)</Text>
            <Grid w="90%" m="auto" templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
                <Service img="https://assets-global.website-files.com/5d03b4e130118314af624b20/6268348095d1df7966f8012b_Gift_Illo_1.png" step="Step 1" title="You'll Choose the Amount" desc="Purchase a gift card for someone special and we’ll send it to them." />
                <Service img="https://assets-global.website-files.com/5d03b4e130118314af624b20/62683490d492cfe9d90dbd7a_Gift_Illo_2.png" step="Step 2" title="They'll Select Their Meals" desc="Your gift card's recipient will choose their meals and select their delivery day." />
                <Service img="https://assets-global.website-files.com/5d03b4e130118314af624b20/6268349f5f123b16a40855f7_Gift_Illo_3.png" step="Step 3" title="We’ll Cook & Deliver" desc="We’ll prepare their meals and deliver them fresh—right to their door." />
            </Grid>
            <Box p="50px">
                <Heading m="20px 0px 0px 0px" textAlign="center">Enjoy Flexible Plans That Fit Your Life</Heading>
                <Text w={{ base: "80%", md: "50%" }} m="10px auto" textAlign="center">We offer anywhere from 4–12 meals per week, with meals as low as $9.58 each. The bigger your box, the more you’ll save—and you can always pause, cancel, or change your plan at any time.
                </Text>
                <Grid m="20px 0px 0px 0px" templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }} gap={6}>
                    <GridItem w='100%' >
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png" />
                        <Text fontSize="2xl" m="5px" textAlign="center">4-5 Meals</Text>
                    </GridItem>
                    <GridItem w='100%' >
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png" />
                        <Text fontSize="2xl" m="5px" textAlign="center">6-7 Meals</Text>
                    </GridItem>
                    <GridItem w='100%' >
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png" />
                        <Text fontSize="2xl" m="5px" textAlign="center">8-9 Meals</Text>
                    </GridItem>
                    <GridItem w='100%' >
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png" />
                        <Text fontSize="2xl" m="5px" textAlign="center">10-11 Meals</Text>
                    </GridItem>
                    <GridItem w='100%' >
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png" />
                        <Text fontSize="2xl" m="5px" textAlign="center">12 Meals</Text>
                    </GridItem>
                </Grid>
            </Box>
            <Heading m="20px 0px" textAlign="center">Common Questions</Heading>
            {
                faqData.map((ele) => <Faq title={ele.title} details={ele.details} />)
            }
            <Footer />
        </>
    )
}

export default Gift