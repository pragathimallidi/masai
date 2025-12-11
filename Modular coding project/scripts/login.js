document.getElementById("login-btn").addEventListener("click", () => {
  let stored = JSON.parse(localStorage.getItem("user"));

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!stored) {
    alert("No user found. Please signup first.");
    return;
  }

  if (email === stored.email && password === stored.password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful!");
    window.location.href = "todos.html";
  } else {
    alert("Incorrect Email or Password");
  }
});
