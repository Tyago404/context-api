"use client";
import { TodoView } from "@/components/CardTodo/TodoView";
import { MainContainer } from "@/components/MainContainer";
import { TodoModel } from "@/models/TodoModel";
import { getTodos } from "@/utils/getTodos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TodoPage() {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<TodoModel | null>(null);

  useEffect(() => {
    async function buscarTodo() {
      if (!id) return;

      const todos = await getTodos(Number(id));
      setTodo(todos);
    }

    buscarTodo();
  }, [id]);

  return (
    <MainContainer>
      <TodoView todo={todo} />
    </MainContainer>
  );
}
