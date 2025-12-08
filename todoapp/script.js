// ----------------------------
// Fetch Todos from API
// ----------------------------
async function fetchTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        
        const first20 = data.slice(0, 20);
        localStorage.setItem("todos", JSON.stringify(first20));

        renderTodos();
    } catch (error) {
        console.log("Error fetching todos:", error);
    }
}

// ----------------------------
// Get Todos from LocalStorage
// ----------------------------
function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

// ----------------------------
// Save Todos back to LocalStorage
// ----------------------------
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// ----------------------------
// Render Todos on UI
// ----------------------------
function renderTodos() {
    const container = document.getElementById("todo-container");
    const message = document.getElementById("message");
    container.innerHTML = "";

    const todos = getTodos();

    if (todos.length === 0) {
        message.innerText = "No Todos Available";
        return;
    } else {
        message.innerText = "";
    }

    todos.forEach(todo => {
        const div = document.createElement("div");
        div.className = "todo";

        const title = document.createElement("span");
        title.innerText = todo.title;
        if (todo.completed) title.classList.add("completed");

        const toggleBtn = document.createElement("button");
        toggleBtn.innerText = todo.completed ? "Undo" : "Done";
        toggleBtn.className = "toggle-btn";
        toggleBtn.onclick = () => toggleStatus(todo.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTodo(todo.id);

        div.append(title, toggleBtn, deleteBtn);
        container.appendChild(div);
    });
}

// ----------------------------
// Delete a Todo
// ----------------------------
function deleteTodo(id) {
    let todos = getTodos();
    const updated = todos.filter(todo => todo.id !== id);
    saveTodos(updated);
    renderTodos();
}

// ----------------------------
// Toggle a Todo's Status
// ----------------------------
function toggleStatus(id) {
    let todos = getTodos();
    
    const updated = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });

    saveTodos(updated);
    renderTodos();
}

// Initial API Fetch Only If No Data
if (!localStorage.getItem("todos")) {
    fetchTodos();
} else {
    renderTodos();
}
