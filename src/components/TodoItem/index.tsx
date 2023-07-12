import React from "react";

// TODO: add ID
interface ITodoItem {
  description: string;
  completed: boolean;
}

const TodoItem: React.FC<ITodoItem> = ({ description, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
