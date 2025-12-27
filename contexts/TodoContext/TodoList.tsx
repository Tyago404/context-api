"use client";
import { CardTodo } from "@/components/CardTodo/TodoActions";
import { useTodo } from "./TodoContext";
import { useEffect } from "react";

export function TodoList() {
  const { todos } = useTodo();

  return (
    <div className="grid grid-cols-2 gap-4">
      {todos.map((todo) => (
        <div key={todo.id}>
          <CardTodo todo={todo} id={todo.id} />
        </div>
      ))}
    </div>
  );
}
