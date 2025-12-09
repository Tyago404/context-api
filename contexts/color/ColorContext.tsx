"use client";
import { createContext, useContext, useState } from "react";
type ColorContextType = {
  color: string;
  toggleColor: () => void;
};
export const ColorContext = createContext<ColorContextType | null>(null);

export const ColorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [color, setColor] = useState("light");
  const toggleColor = () => {
    setColor(color === "light" ? "dark" : "light");
    console.log("color has changed!");
  };
  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if(!context){
    throw new Error("hook not found!")
  }
  return context
};
