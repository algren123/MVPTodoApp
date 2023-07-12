import React from "react";
import "./App.css";
import Title from "./components/Title";
import TodoItem from "./components/TodoItem";
import { nanoid } from "nanoid";

type TTodo = {
  id: string;
  description: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = React.useState<TTodo[]>([]);
  const [description, setDescription] = React.useState<string>("");

  const addTodo = () => {
    if (!description) {
      alert("Please enter a description");
    } else {
      const newTodo: TTodo = {
        id: nanoid(),
        description,
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id: string) => {
    const updatedTodos: TTodo[] = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  // TODO: Add function to remove todo
  const removeTodo = () => {};

  return (
    <div className="App">
      <Title />
      <input
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" onClick={() => addTodo()}>
        Add
      </button>
      <div>
        {todos.map((todo) => (
          <TodoItem description={todo.description} completed={todo.completed} />
        ))}
      </div>
    </div>
  );
}

export default App;
