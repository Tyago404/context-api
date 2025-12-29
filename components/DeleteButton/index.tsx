import { useTodo } from "@/contexts/TodoContext/TodoContext";
import { ToastContainer, toast } from "react-toastify";
import { deleteTodo } from "@/utils/todoActions";
import clsx from "clsx";

type DeleteButtonProps = {
  id: number;
};

export function DeleteButton({ id }: DeleteButtonProps) {
  const { setTodos } = useTodo();

  async function handleDelete() {
    toast("Todo Deleted!");
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <button
        onClick={handleDelete}
        className={clsx(
          "bg-red-300 rounded-xl",
          "px-4 py-3 w-25",
          "text-center cursor-pointer hover:scale-105 transition-all duration-200"
        )}
      >
        DEL
      </button>
    </>
  );
}
