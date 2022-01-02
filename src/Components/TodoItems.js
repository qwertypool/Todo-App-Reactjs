import {
  HStack,
  IconButton,
  VStack,
  Text,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function TodoItems({ todos, deleteItems, editItems }) {
  if (!todos.length) {
    return (
      <Badge p="4" m="4" borderRadius="lg" colorScheme="green">
        No more todos. YAYY!!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="lg"
      width="100%"
      maxWidth={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack p="2" key={todo.id}>
          <Text as="samp">{todo.itemName}</Text>
          <Spacer />
          <IconButton
            icon={<FaEdit />}
            onClick={() => editItems(todo.id)}
            isround="true"
          />
          <IconButton
            icon={<FaTrashAlt />}
            isround="true"
            onClick={() => deleteItems(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoItems;
