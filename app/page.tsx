"use client";
import { useColor } from "@/contexts/color/ColorContext";
import clsx from "clsx";


export default function Home() {
  const { color, toggleColor } = useColor()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button
        onClick={toggleColor}
        className="cursor-pointer hover:scale-105 transition-all divide-neutral-400"
      >
        <div
          className={clsx(
            "p-10 bg-white rounded-2xl",
            color === "dark" ? "colorChange" : ""
          )}
        >
          <p>CLICK TO CHANGE MY COLOR</p>
        </div>
      </button>
    </div>
  );
}
