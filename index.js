let books = JSON.parse(localStorage.getItem('books')) || [];

const bookList = document.getElementById('book-list');
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const addBtn = document.getElementById('add');

function addBook(author, title) {
  const content = { author, title };

  books.push(content);

  localStorage.setItem('books', JSON.stringify(books));

  return content;
}

// to remove book

function removeBook(title) {
  books = books.filter((book) => book.title !== title);
  localStorage.setItem('books', JSON.stringify(books));
}

// to display book to collection

function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `${book.title}`;
    li.textContent = ` ${book.author}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBook(book.title);
      displayBooks();
    });
    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

// Add event listener to the Add button
addBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  if (title && author) {
    addBook(title, author);
    displayBooks();
    titleInput.value = '';
    authorInput.value = '';
  }
});

// Display the initial collection of books
displayBooks();