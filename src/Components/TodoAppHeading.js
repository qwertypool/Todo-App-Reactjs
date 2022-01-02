import React from "react";
import { VStack, Heading, Box } from "@chakra-ui/react";

function TodoAppHeading() {
  return (
    <VStack p="3" my="4">
      <Heading
        size="2xl"
        fontWeight="extrabold"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        alignItems="center"
      >
        Todo Application
      </Heading>
    </VStack>
  );
}

export default TodoAppHeading;
