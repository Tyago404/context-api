"use client";
import { TodoView } from "@/components/CardTodo/TodoView";
import { MainContainer } from "@/components/MainContainer";
import { useTodo } from "@/contexts/TodoContext/TodoContext";
import { TodoModel } from "@/models/TodoModel";
import { getTodosById } from "@/utils/todoActions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TodoPage() {
  const { id } = useParams<{ id: string }>();

  const { todos } = useTodo();
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) return;

  return (
    <MainContainer>
      <TodoView todo={todo} />
    </MainContainer>
  );
}
