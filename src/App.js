import * as React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import Header from "./Components/Header";
import TodoAppHeading from "./Components/TodoAppHeading";
import TodoItems from "./Components/TodoItems";
import AddTodo from "./Components/AddTodo";
import { useState, useEffect } from "react";

function App({ Component }) {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState({});

  const deleteItems = (id) => {
    const todoItems = todos.filter((todo) => {
      return id !== todo.id;
    });
    console.log(todoItems);
    setTodos(todoItems);
  };

  const addTodoItems = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const updateValue = (id, value) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.itemName = value;
          return todo;
        } else {
          return todo;
        }
      })
    );
  };

  const editItems = (id) => {
    const newEditItem = todos.find((item) => {
      return item.id === id;
    });
    console.log(newEditItem);
    setIsEditing(true);
    setEditItem({ ...newEditItem });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("todos", todos);
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
          isEditing={isEditing}
          editItem={editItem}
          updateValue={updateValue}
          setIsEditing={setIsEditing}
        />
      </VStack>
    </div>
  );
}

export default App;
