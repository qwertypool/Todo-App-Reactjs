import * as React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import Header from "./Components/Header";
import TodoAppHeading from "./Components/TodoAppHeading";
import TodoItems from "./Components/TodoItems";
import AddTodo from "./Components/AddTodo";
import { useState, useEffect } from "react";

function App({ Component }) {
  const initialTodo = [
    {
      id: 1,
      itemName: "Give HackerEarth Test",
    },
    {
      id: 2,
      itemName: "Write anonymous functions and arrow functions in JS",
    },
    {
      id: 3,
      itemName: "Watch SpiderMan Movie",
    },
    {
      id: 4,
      itemName: "Sleep 12 hours",
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItemName, setEditItemName] = useState("");

  const deleteItems = (id) => {
    const todoItems = todos.filter((todo) => {
      return id !== todo.id;
    });
    setTodos(todoItems);
  };

  const addTodoItems = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editItems = (id) => {
    const newEditItem = todos.find((item) => {
      return item.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(!toggleSubmit);
    setEditItemName(newEditItem.itemName);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header />
      <VStack>
        <TodoAppHeading />
        <TodoItems
          todos={todos}
          deleteItems={deleteItems}
          editItems={editItems}
        />
        <AddTodo
          addTodoItems={addTodoItems}
          toggleSubmit={toggleSubmit}
          editItemName={editItemName}
        />
      </VStack>
    </div>
  );
}

export default App;
