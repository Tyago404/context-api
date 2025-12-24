"use client";

import { TodoEdit } from "@/components/CardTodo/TodoEdit";
import { MainContainer } from "@/components/MainContainer";
import { TodoModel } from "@/models/TodoModel";
import { getTodosById, updateTodos } from "@/utils/getTodos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditTodoPage() {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<TodoModel | null>(null);

  useEffect(() => {
    async function searchTodo() {
      if (!id) return;

      const todos = await getTodosById(Number(id));
      setTodo(todos);
    }

    searchTodo();
  }, [id]);

  async function handleUpdateTodo(updatedTodo: TodoModel) {
    const updatedFromApi = await updateTodos(updatedTodo);
    setTodo(updatedFromApi);
   
    console.log("final todo below")
    console.log(todo)
  }

  if (!todo) return;

  return (
    <MainContainer>
      <h1>{todo.title}</h1>
      <h1>{todo.completed ? 'true' : 'false'}</h1>
      <TodoEdit onSubmit={handleUpdateTodo} todo={todo} />
    </MainContainer>
  );
}
