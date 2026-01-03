import { MainContainer } from "@/components/MainContainer";
import { TodoList } from "@/contexts/TodoContext/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <MainContainer>
      <Link
        className="bg-green-500 p-4 rounded-full font-black text-gray-100 hover:scale-105 transition-all duration-200"
        href={`todo/add`}
      >
        Adicionar Todo
      </Link>
      <TodoList />
    </MainContainer>
  );
}
