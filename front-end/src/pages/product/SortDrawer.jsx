import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Radio,
  Stack,
  Button,
  RadioGroup,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
const SortDrawer = () => {



  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  return (
  <Box>
    <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          {/* <Radio value='left'>Left</Radio> */}
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
    Sort & Filters
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Filter By:</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
  )
};

export default SortDrawer;
