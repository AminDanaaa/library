// Imports and global constants
const deleteBtnSVG = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path fill="#ff5a7a" d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const container = document.querySelector(".container");
const addBookBtn = document.querySelector(".add-book-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const addBookBtnModal = document.querySelector(".submit-btn");
const cancelBtnModal = document.querySelector(".cancel-btn");
const form = document.getElementById("form-new-book");
const formTitle = document.getElementById("book-title");
const formAuthor = document.getElementById("book-author");
const formPages = document.getElementById("book-pages");
const formCheckbox = document.getElementById("book-status");
const myLibrary = [];



// Main.js:
function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}



function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    updateLibrary();
}



function createCard() {
    let card = document.createElement("div");
    card.classList.add("book-card");
    card.classList.add("neumorph-card");
    container.appendChild(card);
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
    container.innerHTML = "";
    for (book in myLibrary) {
        let card = createCard();
        let {title, author, pages, bottomDiv} = createCardElements();
        appendCardChildren(card, title, author, pages, bottomDiv);
        innerCardUpdate(myLibrary[book], title, author, pages);
        let [btnStatus, btnRemove] = createLowerCard(myLibrary[book], bottomDiv);
    }
}



// Modal logic for adding a new book:
addBookBtn.addEventListener('click', () => {
    modalOverlay.classList.toggle("modal-overlay-active");
});



cancelBtnModal.addEventListener('click', (event) => {
    event.preventDefault();
    modalOverlay.classList.toggle("modal-overlay-active");
});



form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(formTitle.value, formAuthor.value, Number(formPages.value), formCheckbox.checked);
    modalOverlay.classList.toggle("modal-overlay-active");
    form.reset();
});



// Home:
const makeDummyCard = (number) => {
    for (let index = 0; index < number; index++) {
        addBookToLibrary(`Book ${index}`, "Amin Dana", "100", true);
    }
}

makeDummyCard(14);