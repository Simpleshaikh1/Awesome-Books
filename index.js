import { DateTime } from './modules/luxon.js';
import BookList from './modules/manageBook.js';
import { showBooks } from './modules/Nav.js';

const lists = new BookList();
lists.display();
showBooks();

setInterval(() => {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('date').innerHTML = currentDate;
}, 1000);
