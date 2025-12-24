import { TodoModel } from "@/models/TodoModel";

export async function getTodosById(id: number | null) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const jsonData = await res.json();
    return jsonData;
  } catch (e) {
    console.log("Todo not found!");
  }
}

export async function updateTodos(updatedTodo: TodoModel) {
  const { id, title, completed } = updatedTodo;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      completed: completed,
    }),
  })
  const jsonData = await res.json()
  console.log('method put executed!')
  console.log(jsonData)
  return jsonData

}
