import BookList from './modules/manageBook';
import { showBooks } from './modules/navigation';

const lists = new BookList();
lists.display();
showBooks();