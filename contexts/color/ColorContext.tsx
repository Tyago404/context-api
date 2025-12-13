"use client";
import { createContext, useContext, useEffect, useState } from "react";

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

   useEffect(()=>{
    const savedColor = localStorage.getItem("theme-color")
    if(savedColor){
      setColor(savedColor)
    }
console.log('executed!')
  }, [])
  
  useEffect(()=>{
    localStorage.setItem("theme-color", color)
  },[color])

  const toggleColor = () => {
    setColor((prev) => prev === "light" ? "dark" : "light" );

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
