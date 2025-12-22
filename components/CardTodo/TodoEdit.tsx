import { TodoModel } from "@/models/TodoModel";
import { updateTodos } from "@/utils/getTodos";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type TodoEditType = {
  todo: TodoModel | null;
  onSubmit: (todo: TodoModel) => void;
};

export function TodoEdit({ todo, onSubmit }: TodoEditType) {
  if (!todo) return;

  const [todoState, setTodoState] = useState<TodoModel>(todo);

  useEffect(() => {
    setTodoState(todo);
  }, [todo]);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(todoState);
  };

  const fieldsCommonClasses =
    "bg-gray-300 rounded-2xl p-4  text-2xl w-full cursor-pointer border border-sm border-black/40";

  return (
    <div className="flex flex-col justify-center bg-(--bgSecondary) rounded-xl text-black shadow-2xl ">
      <div className="flex items-center p-6">
        <Image
          src="/images/edit.png"
          width={300}
          height={300}
          alt="tasked"
          className="w-25 h-25"
        />
        <h1 className="font-bold text-6xl">
          <span className="text-amber-500">EDIT</span> Your Todo {todo.id}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-start m-4 p-4 gap-6 font-semibold text-xl">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="id" className="flex items-center m-4 gap-2">
            ID:
            <input
              type="text"
              disabled
              id="id"
              value={todoState.id}
              className={fieldsCommonClasses}
            />
          </label>

          <label htmlFor="title" className="flex items-center m-4 gap-2">
            TITLE:
            <input
              type="text"
              id="title"
              value={todoState.title}
              onChange={(e) =>
                setTodoState((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder={todoState.title}
              className={fieldsCommonClasses}
            />
          </label>

          <label htmlFor="completed" className="flex items-center m-4 gap-2">
            COMPLETED:
            <input
              type="checkbox"
              checked={todoState.completed}
              id="completed"
              onChange={(e) =>
                setTodoState(prev => ({
                  ...prev,
                  completed: e.target.checked,
                }))
              }
              placeholder={todo.completed ? "Completed" : "Pending"}
              className={fieldsCommonClasses}
            />
          </label>
          
            <button
            type="submit"
              className={clsx(
                "bg-amber-300 rounded-xl px-4 py-3 cursor-pointer hover:scale-105 transition-all duration-200"
              )}
            >
              EDIT
            </button>
          
        </form>

        <Link
          href={"/"}
          className="bg-red-500  p-4 rounded-xl  cursor-pointer hover:scale-105 transition-all duration-200"
        >
          CANCEL
        </Link>
      </div>
    </div>
  );
}
