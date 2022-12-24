import {
    Box,
    Heading,
    Image,
    Grid,
    Text,
    Flex,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Select,
    Stack,
    Input,
    FormControl,
    FormLabel,
    FormHelperText
  } from "@chakra-ui/react";




const Modalal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(

        <div>
              <Flex gap={10}>  
        

<Button 
 boxShadow="md"
 bg={"blue.700"}
 rounded={"sm"}
 color={"white"}
onClick={onOpen}>Add</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader> 
      <Text> Users Feedback</Text>
      <br/>
    
      </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <form 
    id="new-form"
    onSubmit={(e) => {
      e.preventDefault();
      alert("Comment Added")
    }}>
       
              <FormControl>
                <FormLabel>
                Add reviews

                <Box>
                    {/* ------------ */}
                    {/* ADD MAP HERE */}
                {/* <Flex gap={"1px"}>
                {ARRAY.map((el, index) => (
                  <Text
                    as="i"
                    m={"2px"}
                    textAlign="justify"
                    fontWeight={"700"}
                    key={index}
                  >
                    {el.Name}
                  </Text>
                ))}
              </Flex> */}

                </Box>
                </FormLabel>
                <Input   type="text"
                 pointerEvents='none'
              variant='filled' placeholder='comment' />
              <FormHelperText>
                Add your valuable reviews here...
              </FormHelperText>
              </FormControl>
      
    </form>
    </ModalBody>

    <ModalFooter gap={"3px"}>
      
      <Button  type="submit" form="new-form" border={"1px solid blue"}  mr={3}variant='ghost'>Send</Button>
      <Button  border={"1px solid blue"}  mr={3}variant='ghost'>Edit</Button>
      <Button  borderRadius={"300px"} colorScheme='blue' mr={3} onClick={onClose}>
        close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>


               {/* <Button colorScheme='twitter'>
    Send
  </Button>  */}
 
  
              </Flex>
            
           





        </div>
    )

}
 export default Modalal;