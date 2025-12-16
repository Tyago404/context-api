
import { MainContainer } from "@/components/MainContainer";
import { TodoList } from "@/contexts/TodoContext/TodoList";

export default function Home() {
  return (
   <MainContainer>
    <TodoList />
   </MainContainer>

 
  );
}
