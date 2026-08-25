const container = document.querySelector(".container");
const myLibrary = [];
const deleteBtnSVG = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';

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

function updateLibrary() {
    container.innerHTML = "";
    for (book in myLibrary) {
        let thisBookCard = document.createElement("div");
        thisBookCard.classList.add("book-card");

        let bookTitle = document.createElement("h1");
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");
        let buttomDiv = document.createElement("div");

        thisBookCard.appendChild(bookTitle);
        thisBookCard.appendChild(bookAuthor);
        thisBookCard.appendChild(bookPages);
        thisBookCard.appendChild(buttomDiv);

        bookTitle.innerHTML = myLibrary[book].title;
        bookAuthor.innerHTML = `Written by: ${myLibrary[book].author}`;
        bookPages.textContent = `This book has ${myLibrary[book].pages} pages.`;

        let readStatusButton = document.createElement("button");
        let removeButton = document.createElement("button");

        buttomDiv.appendChild(readStatusButton);
        buttomDiv.appendChild(removeButton);

        removeButton.classList.add("remove-button");
        removeButton.innerHTML = deleteBtnSVG;

        readStatusButton.innerText = myLibrary[book].isRead ? `It's Read` : `It's not Read`;
        readStatusButton.classList.add("status-button");
        if (myLibrary[book].isRead) {
            readStatusButton.classList.add("is-read");
        } else {
            readStatusButton.classList.add("is-not-read");
        }

        container.appendChild(thisBookCard);
    }
}

addBookToLibrary("Book-01", "TestAuthor", "100", true);
addBookToLibrary("Book-02", "TestAuthor", "100", false);
addBookToLibrary("Book-03", "TestAuthor", "100", true);
addBookToLibrary("Book-04", "TestAuthor", "100", false);
addBookToLibrary("Book-05", "TestAuthor", "100", true);
addBookToLibrary("Book-06", "TestAuthor", "300", false);
addBookToLibrary("Book-07", "TestAuthor", "100", false);
addBookToLibrary("Book-08", "TestAuthor", "100", false);
addBookToLibrary("Book-09", "TestAuthor", "100", false);
addBookToLibrary("Book-10", "TestAuthor", "100", false);
addBookToLibrary("Book-11", "TestAuthor", "100", false);
addBookToLibrary("Book-12", "TestAuthor", "100", false);
addBookToLibrary("Book-13", "TestAuthor", "200", false);
addBookToLibrary("Book-14", "TestAuthor", "100", false);