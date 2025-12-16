import { TodoModel } from "@/models/TodoModel";
import { createContext } from "react";

type TodoContextType = {
  todos: TodoModel[];
};

export const TodoContext = createContext<TodoContextType | null>(null);