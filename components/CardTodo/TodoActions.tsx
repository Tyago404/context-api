"use client";
import { TodoModel } from "@/models/TodoModel";
import { deleteTodo } from "@/utils/todoActions";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "../DeleteButton";

type CardTodoProps = {
  todo: TodoModel | null;
  id: number;
};

export function CardTodo({ todo, id }: CardTodoProps) {
  const commonClasses = "text-normal font-medium mx-2";
  const buttonCommonClasses =
    "px-4 py-3 w-25 text-center cursor-pointer hover:scale-105 transition-all duration-200";

  if (!todo) return null;

  return (
    <div className="flex flex-col justify-center items-center bg-(--bgSecondary) text-black p-6 rounded-xl w-100 h-90">
      <Image
        src="/images/tasked.png"
        width={300}
        height={300}
        alt="tasked"
        className="w-25 h-25"
      />
      <div className="flex flex-col justify-start w-full m-6 font-semibold text-xl ">
        <div className="flex">
          <h2>Id:</h2>
          <p className={commonClasses}>{todo.id}</p>
        </div>

        <div className="flex">
          <h2>Title:</h2>
          <p className={commonClasses}>{todo.title}</p>
        </div>

        <div className="flex">
          <h2>Completed:</h2>
          <p
            className={clsx(
              commonClasses,
              todo.completed === true ? "text-green-700" : "text-red-700"
            )}
          >
            {todo.completed ? "Completed" : "Pending"}
          </p>
        </div>
      </div>

      <div className="flex gap-6 font-bold ">
        <Link
          href={`/todo/${id}`}
          className={clsx("bg-green-300 rounded-xl", buttonCommonClasses)}
        >
          SEE
        </Link>
        <Link
          href={`/todo/${id}/edit`}
          className={clsx("bg-amber-300 rounded-xl", buttonCommonClasses)}
        >
          EDIT
        </Link>
       
        <DeleteButton id={id} />
      </div>
    </div>
  );
}
