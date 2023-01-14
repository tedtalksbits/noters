import React from "react";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
const Card = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box bg={"white"} p={30} boxShadow={"md"} borderRadius={3}>
        <Heading>Title</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, alias?
        </Text>
        <Button
          onClick={onToggle}
          display={"block"}
          w={"fit-content"}
          my={5}
          mx={"auto"}
        >
          Show
        </Button>
        <Divider my={5} />
        <Collapse in={isOpen} animateOpacity>
          <Box p="40px">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              dolorem!
            </p>
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Card;
