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
  awesome.style.display = 'block';
};

showBooks();

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

export { showAdd, showBooks, showContact };