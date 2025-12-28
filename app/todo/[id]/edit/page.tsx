"use client";

import { TodoEdit } from "@/components/CardTodo/TodoEdit";
import { MainContainer } from "@/components/MainContainer";
import { useTodo } from "@/contexts/TodoContext/TodoContext";
import { TodoModel } from "@/models/TodoModel";
import { updateTodos } from "@/utils/getTodos";
import { useParams, useRouter } from "next/navigation";

export default function EditTodoPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { todos, setTodos } = useTodo();

  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return <MainContainer>Todo não encontrado</MainContainer>;
  }
  //adicionar errorpage

  async function updateTodoState(updatedTodo: TodoModel) {
    const newTodo = await updateTodos(updatedTodo);

    setTodos((prev) =>
      prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
    );

    router.push("/");
  }

  return (
    <MainContainer>
      <TodoEdit todo={todo} onSubmit={updateTodoState} />
    </MainContainer>
  );
}
