"use client";

import { TodoModel } from "@/models/TodoModel";
import clsx from "clsx";
import { Check, Pencil, PencilOff, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

type TodoEditType = {
  todo: TodoModel | null;
  onSubmit: (todo: TodoModel) => void;
};

export function TodoEdit({ todo, onSubmit }: TodoEditType) {
 
  if (!todo) return null;
  const [todoState, setTodoState] = useState<TodoModel>(todo);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(todoState);
    toast("Todo edited!");
  };

  const fieldsCommonClasses =
    "bg-gray-300 rounded-2xl p-4  text-2xl w-full cursor-pointer ";

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
              placeholder={String(todoState.id)}
              className={fieldsCommonClasses}
            />
            <PencilOff />
          </label>

          <label htmlFor="title" className="flex items-center m-4 gap-2">
            TITLE:
            <input
              type="text"
              id="title"
              value={todoState.title}
              onChange={(e) =>
                setTodoState((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              placeholder={todoState.title}
              className={fieldsCommonClasses}
            />
            <Pencil />
          </label>
          <label htmlFor="completed" className="flex items-center m-4 gap-2">
            Completed:
            <input
              type="checkbox"
              checked={todoState.completed}
              id="completed"
              onChange={(e) =>
                setTodoState((prev) => ({
                  ...prev,
                  completed: e.target.checked,
                }))
              }
              className="hidden peer"
            />
            <div
              className={clsx(
                "flex justify-center items-center",
                "w-60 h-10 border-6 cursor-pointer hover:scale-103",
                "rounded-full",
                todoState.completed === true
                  ? "border-green-400 bg-green-200"
                  : "border-red-400 bg-red-200"
              )}
            >
              {todoState.completed === true ? <Check /> : <X />}
            </div>
            <Pencil />
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
      </div>
      <Link
        href={"/"}
        className="bg-gray-300 rounded-2xl text-red-900 flex items-center justify-center"
      >
        <h1 className="font-semibold text-xl p-2">Cancel / Return</h1>
      </Link>
    </div>
  );
}
