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
     await updateTodos(updatedTodo);
    // setTodo(updatedTodo);
  }

  if (!todo) return;

  return (
    <MainContainer>
      <TodoEdit onSubmit={handleUpdateTodo} todo={todo} />
    </MainContainer>
  );
}
