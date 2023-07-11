import * as navigationFunctions from './modules/navigation.js';
import BookList from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';

const listButton = document.querySelector('.menu :nth-child(1) button');
const addBookButton = document.querySelector('.menu :nth-child(3) button');
const contactButton = document.querySelector('.menu :nth-child(5) button');
const addButton = document.querySelector('.add-btn');
const dateUI = document.querySelector('#date');

// run load book section function immediately

const bookListInstance = new BookList();
bookListInstance.loadBookSection();

const dateNow = DateTime.now();
dateUI.innerText = dateNow.toString();

// Menu functionallity

addButton.addEventListener('click', bookListInstance.addBook);
listButton.addEventListener('click', navigationFunctions.openBookListSection);
addBookButton.addEventListener('click', navigationFunctions.openAddBookSection);
contactButton.addEventListener('click', navigationFunctions.openContactSection);
