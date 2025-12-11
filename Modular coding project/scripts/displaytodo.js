export function displayTodos(data) {
  let container = document.getElementById("todos-container");
  container.innerHTML = "";

  data.forEach(todo => {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";

    div.innerHTML = `
      <h3>ID: ${todo.id}</h3>
      <p>Title: ${todo.title}</p>
      <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
    `;

    container.appendChild(div);
  });
}
