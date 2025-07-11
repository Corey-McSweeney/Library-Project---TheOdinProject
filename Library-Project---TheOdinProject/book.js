// Array to store the books in a library
const myLibrary = [];

// Constrcutor for Book Objects
function Book(title, author, pages, read) {
  // Ensure not called as function
  if (!new.target) {
    throw Error("You must use the 'new' operator for this function");
  }

  // Parameters
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // Create string concatenation for information output
  let info = title + " by " + author + ", " + pages + " pages, " + read;

  // Fuinction for getting the info string and returning it
  this.info = function () {
    return info;
  };
}

// Function to render the books in cards on the page
function render() {
  let libraryElement = document.getElementById("library");
  for (let i = 0; i < myLibrary.length; i++) {
    // Create instance for current itteration in loop
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `<p>${book.title}</p>`
    libraryElement.appendChild(bookElement);
  }
}

// Function to itterate all book objects and render on the page
function render() {
  // Select the library area of the page to render books
  const container = document.getElementById("library");

  // Clear the container - ensure no duplicate objects rendered
  container.innerHTML= "";

  // Itterate every object in array
  myLibrary.forEach((book) => {
    // Create card element
    const card = document.createElement("div");
    card.classList.add("book-card");

    // Create title
    const title = document.createElement("h3");
    title.textContent = book.title;
    title.classList.add('card-title');

    // Create author
    const author = document.createElement("p");
    author.textContent = `Author: ${book.pages}`;

    // Create pages
    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    // Create read box
    const read = document.createElement("p");
    read.textContent = `Read: ${book.read ? "Yes" : "No"}`;

    // Append each element
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    container.appendChild(card);
  })
}

// Function to add a book object to the library
function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  // Debug print statement
  console.log(newBook);
  render();
}

// Event Listeners
// References
const newBookBtn = document.getElementById('new-book-btn');
const newBookForm = document.getElementById('new-book-form');

// Toggle display
newBookBtn.addEventListener('click', () => {
  if (newBookForm.style.display === 'none' || newBookForm.style.display === '') {
    newBookForm.style.display = 'block'; // Show form
  } else {
    newBookForm.style.display = 'none'; // Hide form if currently visible
  }
});

// Submit form
document.querySelector("#new-book-form").addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
  // Clear and close form
  newBookForm.reset();
  newBookForm.style.display = 'none';
})


// Function to loop all books and display on the page
