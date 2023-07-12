import React from "react";

export type TTodoItem = {
  description: string;
  completed: boolean;
};

const TodoItem: React.FC<TTodoItem> = ({ description, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
