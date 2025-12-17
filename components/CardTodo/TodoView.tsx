import { TodoModel } from "@/models/TodoModel";
import Image from "next/image";

type TodoView = {
  todo: TodoModel | null;
};

export function TodoView({ todo }: TodoView) {
  const commonClasses = "text-normal font-medium mx-2";
  const fieldsCommonClasses = "flex bg-gray-300 rounded-2xl p-4 text-2xl";

  if (!todo) return;

  return (
    <div className="flex flex-col justify-center bg-(--bgSecondary) rounded-xl text-black shadow-2xl ">
      <div className="flex items-center p-6">
        <Image
          src="/images/tasked.png"
          width={300}
          height={300}
          alt="tasked"
          className="w-25 h-25"
        />
        <h1 className="font-bold text-6xl">
          <span className="text-green-500">SEE</span> Your Todo
        </h1>
      </div>

      <div className="flex flex-col justify-start m-6 p-6 gap-6 font-semibold text-xl ">
        <div className={fieldsCommonClasses}>
          <h2>Id:</h2>
          <p className={commonClasses}>{todo.id}</p>
        </div>

        <div className={fieldsCommonClasses}>
          <h2>Title:</h2>
          <p className={commonClasses}>{todo.title}</p>
        </div>

        <div className={fieldsCommonClasses}>
          <h2>Completed:</h2>
          <p className={commonClasses}>{todo.completed ? "Completed" : "Pending"}</p>
        </div>
      </div>
    </div>
  );
}
