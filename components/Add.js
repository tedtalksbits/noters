import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@chakra-ui/react";

function Add() {
   return (
      <Box
         display="flex"
         bg="red"
         height={20}
         width={20}
         rounded="100%"
         marginLeft="auto"
         alignItems="center"
         justifyContent="center"
         position="fixed"
         bottom={5}
         right={5}
      >
         <AddIcon />
      </Box>
   );
}

export default Add;
