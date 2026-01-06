"use client";
import { CardTodo } from "@/components/CardTodo/TodoActions";
import { useTodo } from "./TodoContext";

export function TodoList() {
  const { todos } = useTodo();

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {todos.map((todo) => (
        <div key={todo.id}>
          <CardTodo todo={todo} id={todo.id} />
        </div>
      ))}
    </div>
  );
}
