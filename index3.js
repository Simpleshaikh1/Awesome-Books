class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('myBooks')) || [];
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addBtn = document.getElementById('add');
    this.bookList = document.getElementById('book-list');
    this.addBtn.addEventListener('click', () => {
      const title = this.titleInput.value;
      const author = this.authorInput.value;
      if (title && author) {
        this.addBook(title, author);
        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    });
    this.display();
  }

  display() {
    this.bookList.innerHTML = '';
    this.books.forEach((book) => {
      const bookDiv = document.createElement('li');
      bookDiv.style.backgroundColor = 'rgba(125, 125, 125, 0.3)';
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-button');
      bookDiv.innerHTML = `<h5>"${book.title}" by <span>${book.author}</span></h5>`;
      removeBtn.addEventListener('click', () => {
        this.removeBook(book);
      });
      bookDiv.append(removeBtn);
      this.bookList.appendChild(bookDiv);
      const numBooks = this.bookList.children.length;
      if (numBooks % 2 === 0) {
        bookDiv.style.backgroundColor = 'rgb(255, 255, 255)';
      }
    });
  }

  addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('myBooks', JSON.stringify(this.books));
    this.display();
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('myBooks', JSON.stringify(this.books));
    this.display();
  }
}

const lists = new BookList();
lists.display();

const listNav = document.querySelector('#list');
const addNav = document.querySelector('#add-new');
const contactNav = document.querySelector('#contact');

const contact = document.querySelector('.contact-info-section');
const books = document.querySelector('.list-section');
const addBook = document.querySelector('.form1');
const awesome = document.querySelector('#awesome-heading');

const showBooks = () => {
  localStorage.setItem('currentSection', 'list');
  contact.style.display = 'none';
  books.style.display = 'block';
  addBook.style.display = 'none';
  awesome.style.display = '';
};

const showAdd = () => {
  localStorage.setItem('currentSection', 'add');
  contact.style.display = 'none';
  books.style.display = 'none';
  addBook.style.display = 'block';
  awesome.style.display = 'none';
  showAdd();
};

const showContact = () => {
  localStorage.setItem('currentSection', 'contact');
  contact.style.display = 'block';
  books.style.display = 'none';
  addBook.style.display = 'none';
  awesome.style.display = 'none';
};

listNav.addEventListener('click', showBooks);
addNav.addEventListener('click', showAdd);
contactNav.addEventListener('click', showContact);

const currentSection = localStorage.getItem('currentSection');
if (currentSection === 'add') {
  showAdd();
} else if (currentSection === 'contact') {
  showContact();
} else {
  showBooks();
}
