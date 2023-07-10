const listButton = document.querySelector('.menu :nth-child(1) button');
const addBookButton = document.querySelector('.menu :nth-child(3) button');
const contactButton = document.querySelector('.menu :nth-child(5) button');
const addBookSection = document.querySelector('#add-book-section');
const contactSection = document.querySelector('#contact-section');
const bookListSection = document.querySelector(".book-list-section");

export function openAddBookSection() {
  listButton.style = ''
  addBookButton.style = 'color: rgba(100, 126, 255, 1);'
  contactButton.style = ''
  addBookSection.style = ''
  contactSection.style = 'display: none;'
  bookListSection.style = 'display: none;'
}

export function openBookListSection() {
  listButton.style = 'color: rgba(100, 126, 255, 1);';
  addBookButton.style = '';
  contactButton.style = '';
  bookListSection.style = '';
  addBookSection.style = 'display: none;';
  contactSection.style = 'display: none;';
}

export function openContactSection () {
  listButton.style = '';
  addBookButton.style = '';
  contactButton.style = 'color: rgba(100, 126, 255, 1);';
  bookListSection.style = 'display: none;';
  addBookSection.style = 'display: none;';
  contactSection.style = '';
}
