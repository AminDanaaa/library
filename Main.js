// Imports and global constants
const deleteBtnSVG = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path fill="#ff5a7a" d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const container = document.querySelector(".container");
const myLibrary = [];



// Main.js:
function Book(title, author, pages, isRead) {
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



// Home:
const makeDummyCard = (number) => {
    for (let index = 0; index < number; index++) {
        addBookToLibrary(`Book ${index}`, "Amin Dana", "100", true);
    }
}

makeDummyCard(14);