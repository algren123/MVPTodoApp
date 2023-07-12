import React from "react";
import "./App.css";
import Title from "./components/Title";
import TodoItem, { TTodoItem } from "./components/TodoItem";

function App() {
  // TODO: Add state
  const [todos, setTodos] = React.useState<TTodoItem[]>([]);

  const [description, setDescription] = React.useState<string>("");

  // TODO: Add function to add todo
  const addTodo = () => {};
  // TODO: Add function to toggle todo
  const toggleTodo = () => {};

  // TODO: Add function to remove todo
  const removeTodo = () => {};

  return (
    <div className="App">
      <Title />
      <input type="text" placeholder="Add Todo" />
      <button type="button">Add</button>
      <TodoItem description="Finish training" completed={false} />
      <TodoItem description="Write training" completed={true} />
    </div>
  );
}

export default App;
