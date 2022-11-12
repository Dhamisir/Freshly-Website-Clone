import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
const Faq = ({ title, details }) => {
    return (
        <>
            <Accordion w="80%" m="20px auto" allowToggle>
                <AccordionItem p="5px">
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                <b>{title}</b>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {details}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default Faq