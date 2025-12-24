import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div className="page">
      <h2>Todos</h2>
      <div className="todo-grid">
        {todos.map((todo) => (
          <div className="todo-card" key={todo.id}>
            <h4>{todo.title}</h4>
            <p>
              Status:{" "}
              <strong>
                {todo.completed ? "Completed" : "Not Completed"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
