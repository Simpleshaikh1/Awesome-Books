const listNav = document.querySelector('#list');
const addNav = document.querySelector('#add-new');
const contactNav = document.querySelector('#contact');

const contact = document.querySelector('.contact-info-section');
const books = document.querySelector('.list-section');
const addBook = document.querySelector('.form1');
const awesome = document.querySelector('#awesome-heading');

export const showBooks = () => {
  contact.style.display = 'none';
  books.style.display = 'block';
  addBook.style.display = 'none';
  awesome.style.display = 'block';
};

export const showAdd = () => {
  contact.style.display = 'none';
  books.style.display = 'none';
  addBook.style.display = 'block';
  awesome.style.display = 'none';
};

export const showContact = () => {
  contact.style.display = 'block';
  books.style.display = 'none';
  addBook.style.display = 'none';
  awesome.style.display = 'none';
};

listNav.addEventListener('click', showBooks);
addNav.addEventListener('click', showAdd);
contactNav.addEventListener('click', showContact);
