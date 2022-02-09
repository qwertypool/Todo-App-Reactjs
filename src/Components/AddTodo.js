import React from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function AddTodo({
  addTodoItems,
  isEditing,
  editItem,
  updateValue,
  setIsEditing,
}) {
  const toast = useToast();
  const [content, setContent] = useState("");
  //const [toggleSubmit, setToggleSubmit] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!content) {
      toast({
        title: "No Todo.",
        description: "Oops! No todo added.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (isEditing) {
      updateValue(editItem.id, content);
      setContent("");
      setIsEditing(false);
      return;
    }
    const newTodo = {
      id: nanoid(),
      itemName: content,
    };
    addTodoItems(newTodo);
    setContent("");
  };

  useEffect(() => {
    console.log("here");
    setContent(editItem.itemName ?? "");
  }, [editItem]);
  console.log("outside");

  const handleOnChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <HStack p="2" my="4">
        {/* {!editItemName.length ? (
          <Input
            variant="filled"
            value={editItemName}
            onChange={handleOnChange}
          />
        ) : */}
        {
          <Input
            variant="filled"
            placeholder="Enter your task for today"
            value={content}
            onChange={handleOnChange}
          />
        }

        {isEditing ? (
          <Button colorScheme="purple" px="8" type="submit">
            Edit Todo
          </Button>
        ) : (
          <Button colorScheme="pink" px="8" type="submit">
            Add Todo
          </Button>
        )}
      </HStack>
    </form>
  );
}

export default AddTodo;
