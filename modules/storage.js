export default class Storage {
  static getBooks = () => JSON.parse(localStorage.getItem('myBooks')) || [];

  static setBooks = (books) => localStorage.setItem('myBooks', JSON.stringify(books));
}