let books = [];
const imageUrl = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  if (!title || !author) {
    alert("Please enter title & author");
    return;
  }

  const book = {
    title,
    author,
    category,
    imageUrl
  };

  books.push(book);
  renderBooks(books);
}

function renderBooks(list) {
  const container = document.getElementById("book-container");
  container.innerHTML = "";

  list.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${book.imageUrl}" />
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Category: ${book.category}</p>
      <button onclick="deleteBook(${index})" style="background:red;">Delete</button>
    `;

    container.appendChild(card);
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  renderBooks(books);
}

function sortAZ() {
  books.sort((a, b) => a.title.localeCompare(b.title));
  renderBooks(books);
}

function sortZA() {
  books.sort((a, b) => b.title.localeCompare(a.title));
  renderBooks(books);
}

function filterBooks() {
  const category = document.getElementById("filter").value;

  if (category === "All") {
    renderBooks(books);
  } else {
    const filtered = books.filter(book => book.category === category);
    renderBooks(filtered);
  }
}
