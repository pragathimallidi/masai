import { displayTodos } from "./displayTodos.js";

let isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn) {
  alert("Please login first.");
  window.location.href = "login.html";
}

async function fetchTodos() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();

    displayTodos(data);
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchTodos();
