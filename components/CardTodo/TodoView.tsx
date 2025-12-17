import { TodoModel } from "@/models/TodoModel";
import Image from "next/image";

type TodoView = {
  todo: TodoModel | null;
};

export function TodoView({ todo }: TodoView) {
  const commonClasses = "text-normal font-medium mx-2";

  if (!todo) return;

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
          <h2>Title:</h2>
          <p className={commonClasses}>{todo.title}</p>
        </div>

        <div className="flex">
          <h2>Id:</h2>
          <p className={commonClasses}>{todo.id}</p>
        </div>

        <div className="flex">
          <h2>Completed:</h2>
          <p className={commonClasses}>{todo.completed}</p>
        </div>
      </div>
    </div>
  );
}
