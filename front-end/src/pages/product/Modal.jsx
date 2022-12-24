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
    FormHelperText,
    useToast
  } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_reviewData, add_reviewData } from "../../redux/Review/Review.action";
import { msg_false, error_msg_false } from "../../redux/Review/Review.actionType";




const Modalal = ({productId}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
     let [review, setReview] = useState("");
     const {reviewData, addAndLoad, msg, error_msg} = useSelector((store) => store.reviewReducer);
     const dispatch = useDispatch();
     let toast = useToast();

     const handleChange = (event) =>{
        setReview(event.target.value);
     }

     const handleSubmit = () =>{
      let userId = localStorage.getItem("userToken");
        let data = {
          comment : review,
          productId,
          userId
        }
       dispatch(add_reviewData(data))
     }

     useEffect(() =>{
      dispatch(get_all_reviewData(productId));
      if(msg){
        toast({
          title : `${msg}`,
          status: "success",
          position: "top",
          isClosable: true,
          });
          dispatch({type : msg_false});
      }
      if(error_msg){
        toast({
          title : `${error_msg}`,
          status: "error",
          position: "top",
          isClosable: true,
          });
          dispatch({type : error_msg_false});
      }
     }, [addAndLoad])
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
      // alert("Comment Added")
    }}>
       
              <FormControl>
                <FormLabel>
                <Flex gap={"1px"} flexDirection={"column"}>
                {reviewData.map((el, index) => (
                  <Box w = {"100%"} rounded='dark-lg' p={"5px 3px"} boxShadow='sm' mb={"10px"}>
                    <Text
                    as="i"
                    m={"2px"}
                    textAlign="justify"
                    fontWeight={"700"}
                    key={index}
                  >
                    {`${el.userId.first_name} ${el.userId.last_name}`}
                  </Text> <br />
                  <Text
                    as="i"
                    m={"2px"}
                    textAlign="justify"
                    fontWeight={"400"}
                    key={index}
                  >
                    {`${el.comment}`}
                  </Text>
                </Box>
                ))}
              </Flex>
                Add reviews

                <Box>
                    {/* ------------ */}
                    {/* ADD MAP HERE */}
             

                </Box>
                </FormLabel>
                <Input   type="text"
                //  pointerEvents='none'
              variant='filled' placeholder='comment' onChange={handleChange}/>
              <FormHelperText>
                Add your valuable reviews here...
              </FormHelperText>
              </FormControl>
      
    </form>
    </ModalBody>

    <ModalFooter gap={"3px"}>
      
      <Button  type="submit" form="new-form" border={"1px solid blue"}  mr={3}variant='ghost' onClick={handleSubmit}>Send</Button>
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