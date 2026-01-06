"use client";
import { TodoModel } from "@/models/TodoModel";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from ".";
import { handleAddTodo } from "@/utils/todoActions";

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=2")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  async function addTodo(todo: TodoModel) {
    const createdTodo = await handleAddTodo(todo);
    const todoWithId = {
      ...createdTodo, id: todo.id
    }
    setTodos((prev) => [...prev, todoWithId]);
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("hook not found");
  }
  return context;
};
