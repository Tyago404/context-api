import { TodoModel } from "@/models/TodoModel";

export async function getTodosById(id: number | null) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const jsonData = await res.json();
    return jsonData;
  } catch {
    console.log("Todo not found!");
  }
}

export async function handleAddTodo(todo: TodoModel) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function updateTodos(updatedTodo: TodoModel) {
  const { id, title, completed } = updatedTodo;
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          completed: completed,
        }),
      }
    );
    if (!res.ok) {
      console.warn("API Fake problems!");
    }
    return updatedTodo;
  } catch {
    return updatedTodo;
  }
}

export async function deleteTodo(id: number) {
  console.log("executed");
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
}
