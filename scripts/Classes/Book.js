export default class Book {
    constructor(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = Number(pages);
        this.isRead = isRead;
    }

    changeStatus() {
        this.isRead = !this.isRead;
    }
}