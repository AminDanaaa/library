const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = author;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

addBookToLibrary("Book-01", "TestAuthor", "100", true);
addBookToLibrary("Book-02", "TestAuthor", "100", false);
addBookToLibrary("Book-03", "TestAuthor", "100", true);
addBookToLibrary("Book-04", "TestAuthor", "100", false);
addBookToLibrary("Book-05", "TestAuthor", "100", true);
addBookToLibrary("Book-06", "TestAuthor", "100", false);