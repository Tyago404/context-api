
export async function getTodos(id:number | null) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const jsonData = await res.json();
    return jsonData;
  } catch (e) {
    console.log("Todo not found!");
  }
}
