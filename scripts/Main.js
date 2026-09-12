// Imports and global constants
import Book from "./Classes/Book.js";
import { deleteBtnSVG } from "./SVG/SVG.js";
import * as DOM from "./DOMElements.js";
let myLibrary = [];



function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    updateLibrary();
}



function createCard() {
    let card = document.createElement("div");
    card.classList.add("book-card");
    card.classList.add("neumorph-card");
    DOM.container.appendChild(card);
    return card;
}



function createCardElements() {
    return {
        title: document.createElement("h1"),
        author: document.createElement("p"),
        pages: document.createElement("p"),
        bottomDiv: document.createElement("div")
    };
}



function appendCardChildren(card, title, author, pages, bottomDiv) {
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(bottomDiv);
}



function innerCardUpdate(book, title, author, pages) {
    title.innerHTML = book.title;
    author.innerHTML = `Written by: ${book.author}`;
    pages.textContent = `This book has ${book.pages} pages.`;
}



function createLowerCard(book, bottomDiv) {
    // Status Button:
    let btnStatus = document.createElement("button");
    btnStatus.classList.add("status-button");
    if (book.isRead) {
        btnStatus.classList.add("is-read");
        btnStatus.innerText = `It's Read`;
    } else {
        btnStatus.classList.add("is-not-read");
        btnStatus.innerText = `It's not Read`;
    }
    bottomDiv.appendChild(btnStatus);
    
    // Remove Button:
    let btnRemove = document.createElement("button");
    btnRemove.classList.add("remove-button");
    btnRemove.innerHTML = deleteBtnSVG; 
    bottomDiv.appendChild(btnRemove);

    // Returns the button objects
    return [btnStatus, btnRemove];
}



function updateLibrary() {
    DOM.container.innerHTML = "";
    for (let book in myLibrary) {
        let card = createCard();
        let {title, author, pages, bottomDiv} = createCardElements();
        appendCardChildren(card, title, author, pages, bottomDiv);
        innerCardUpdate(myLibrary[book], title, author, pages);
        let [btnStatus, btnRemove] = createLowerCard(myLibrary[book], bottomDiv);
        addStatusListener(myLibrary[book], btnStatus);
        addRemoveListener(myLibrary[book].id, btnRemove);
    }
}



// Swapping reading status logic:
function addStatusListener(book, btn) {
    btn.addEventListener('click', () => {
        btn.classList.toggle("is-read");
        btn.classList.toggle("is-not-read");
        book.changeStatus();
        if (!book.isRead) {
            btn.innerText = `It's not Read`;
        } else {
            btn.innerText = `It's Read`;
        }
    });
}



// Remove button logic for each card in a function:
function addRemoveListener(bookToRemove, btn) {
    btn.addEventListener('click', () => {
        myLibrary = myLibrary.filter(book => book.id !== bookToRemove);
        updateLibrary();
        console.log(`The UUID: [${bookToRemove}] has been removed.`);
    });
}



// Modal logic for adding a new book:
DOM.addBookBtn.addEventListener('click', () => {
    DOM.modalOverlay.classList.add("modal-overlay-active");
});



DOM.cancelBtnModal.addEventListener('click', (event) => {
    event.preventDefault();
    DOM.modalOverlay.classList.remove("modal-overlay-active");
    DOM.form.reset();
});



DOM.form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(DOM.formTitle.value, DOM.formAuthor.value, Number(DOM.formPages.value), DOM.formCheckbox.checked);
    DOM.modalOverlay.classList.toggle("modal-overlay-active");
    DOM.form.reset();
});



// Making some dummy books:
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Ulysses", "James Joyce", 1040, false);
addBookToLibrary("In Search of Lost Time", "Marcel Proust", 4215, false);
addBookToLibrary("Shahnameh", "Ferdowsi", 928, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);