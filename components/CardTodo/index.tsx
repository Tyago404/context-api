import clsx from "clsx";
import Image from "next/image";

export function CardTodo() {
  const commonClasses = "text-normal font-medium mx-2";
  const buttonCommonClasses =
    "px-4 py-3 cursor-pointer hover:scale-105 transition-all duration-200";
  return (
    <div className="flex flex-col justify-center items-center bg-(--bgSecondary) text-black p-6 rounded-xl">
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
          <p className={commonClasses}>Title1</p>
        </div>

        <div className="flex">
          <h2>Id:</h2>
          <p className={commonClasses}>Id1</p>
        </div>

        <div className="flex">
          <h2>Completed:</h2>
          <p className={commonClasses}>TRUE</p>
        </div>
      </div>

      <div className="flex gap-6 font-bold ">
        <button
          className={clsx("bg-green-300 rounded-xl", buttonCommonClasses)}
        >
          SEE
        </button>
        <button
          className={clsx("bg-amber-300 rounded-xl", buttonCommonClasses)}
        >
          EDIT
        </button>
        <button className={clsx("bg-red-300 rounded-xl", buttonCommonClasses)}>
          DEL
        </button>
      </div>
    </div>
  );
}
