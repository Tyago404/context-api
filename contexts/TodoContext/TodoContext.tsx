"use client";
import { TodoModel } from "@/models/TodoModel";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from ".";

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("hook not found");
  }
  return context;
};
