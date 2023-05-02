class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
}

class Collection {
    constructor() {
      this.books = JSON.parse(localStorage.getItem('books')) || [];
      this.titleInput = document.getElementById('title');
      this.authorInput = document.getElementById('author');
      this.addBtn = document.getElementById('add');
      this.bookList = document.getElementById('bookList');
      this.addBtn.addEventListener('click', () => this.addBook());
      this.displayBooks();
    }

    addBook() {
      const title = this.titleInput.value.trim();
      const author = this.authorInput.value.trim();
      if (title && author) {
        const book = new Book(title, author);
        this.books.push(book);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayBooks();
        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    }

    removeBook(title) {
      this.books = this.books.filter(book => book.title !== title);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    }

    displayBooks() {
      this.bookList.innerHTML = '';
      this.books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
          this.removeBook(book.title);
        });
        li.appendChild(removeBtn);
        this.bookList.appendChild(li);
      });
    }
}
  // Initialize the collection
  const collection = new Collection();