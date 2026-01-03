"use client";
import { useTodo } from "@/contexts/TodoContext/TodoContext";
import clsx from "clsx";
import { Pencil } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export function TodoAdd() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodo();
  const router = useRouter();

  async function handleTitle(e: FormEvent) {
    e.preventDefault();
    addTodo({
      title,
      completed: false,
    });
    toast("Todo Added!");
    router.push("/");
  }

  const fieldsCommonClasses =
    "bg-gray-300 rounded-2xl p-4  text-2xl w-full cursor-pointer ";

  return (
    <div className="flex flex-col justify-center bg-(--bgSecondary) rounded-xl text-black shadow-2xl ">
      <div className="flex items-center p-6">
        <Image
          src="/images/add.png"
          width={300}
          height={300}
          alt="tasked"
          className="w-25 h-25"
        />
        <h1 className="font-bold text-6xl">
          <span className="text-green-500">ADD</span> Your Todo
        </h1>
      </div>

      <div className="flex flex-col items-center justify-start m-4 p-4 gap-6 font-semibold text-xl">
        <form className="flex flex-col" onSubmit={handleTitle}>
          <label htmlFor="title" className="flex items-center m-4 gap-2">
            TITLE:
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              className={fieldsCommonClasses}
            />
            <Pencil />
          </label>

          <button
            type="submit"
            className={clsx(
              "bg-green-500 rounded-xl px-4 py-3 cursor-pointer hover:scale-105 transition-all duration-200"
            )}
          >
            ADD
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
