import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { GearSix, List, Pencil } from "phosphor-react";
import React from "react";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box as="nav" boxShadow={"md"} p={3} mb={10}>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        ml={"auto"}
        display={"block"}
      >
        <List />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Decks</DrawerHeader>

          <DrawerBody>
            <VStack w={"100%"}>
              <Input placeholder="Search..." />
              <Box
                w={"100%"}
                bg={"gray.200"}
                p={"1.5"}
                borderTopRightRadius="xl"
                borderBottomRightRadius="xl"
                cursor={"pointer"}
              >
                Learning HTML
              </Box>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3}>
              <Pencil />
            </Button>
            <Button colorScheme="blue">
              <GearSix />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Nav;
