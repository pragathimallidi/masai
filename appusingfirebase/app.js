// 🔥 Firebase configuration (YOUR KEYS)
var firebaseConfig = {
  apiKey: "AIzaSyCphA6THAHCx-xat75BkO4yWl21plscdeU",
  authDomain: "webappusingfirebase.firebaseapp.com",
  projectId: "webappusingfirebase",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();

// UI elements
const booksContainer = document.getElementById("booksContainer");
const bookForm = document.getElementById("bookForm");

// ✅ Realtime fetch books
db.collection("books").onSnapshot(snapshot => {
  booksContainer.innerHTML = "";
  snapshot.forEach(doc => {
    const book = doc.data();
    const div = document.createElement("div");
    div.classList.add("book");

    div.innerHTML = `
      <img src="${book.coverImageURL}" />
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price}</p>
      <button onclick="updateAuthor('${doc.id}')">Update Author</button>
      <button onclick="deleteBook('${doc.id}')">Delete</button>
    `;

    booksContainer.appendChild(div);
  });
});

// ✅ Add new book
bookForm.addEventListener("submit", e => {
  e.preventDefault();

  db.collection("books").add({
    title: title.value,
    author: author.value,
    price: Number(price.value),
    coverImageURL: image.value
  });

  bookForm.reset();
});

// ✅ Delete book
function deleteBook(id) {
  db.collection("books").doc(id).delete();
}

// ✅ Update author
function updateAuthor(id) {
  const newAuthor = prompt("Enter new author name");
  if (newAuthor) {
    db.collection("books").doc(id).update({
      author: newAuthor
    });
  }
}