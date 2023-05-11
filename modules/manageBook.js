import Interface from './interface';
import Storage from './storage';

export default class BookList {
  constructor() {
    this.interface = new Interface();
    this.storage = Storage;
    this.books = this.storage.getBooks() || [];
    this.interface.addBookHandler((title, author) => {
      this.addBook(title, author);
    });
    this.interface.removeBookHandler((book) => {
      this.removeBook(book);
    });
    this.interface.display(this.books);
  }

  addBook = (title, author) => {
    this.books.push({ title, author });
    this.storage.setBooks(this.books);
    this.interface.display(this.books);
  }

  display = () => {
    this.interface.display(this.books);
  }

  removeBook = (book) => {
    this.books = this.books.filter((b) => b !== book);
    this.storage.setBooks(this.books);
    this.interface.displayBooks(this.books);
  }
}