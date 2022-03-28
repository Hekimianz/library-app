let myLibrary = [];
let bookInfo;
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getInfo = function () {
    bookInfo = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read + ".";
    return bookInfo;
}
let bookShelf = document.getElementById("bookShelf");
let addedBook = document.createElement("div");
addedBook.classList.add("book");


function addBookToShelf() {
    let bookShelf = document.getElementById("bookShelf");
    let addedBook = document.createElement("div");
    addedBook.classList.add("book");
    let bookTitle = document.createElement("span");
    let bookAuthor = document.createElement("span");
    let bookPages = document.createElement("span");
    let bookRead = document.createElement("span");
    let deleteBtn = document.createElement("button");
    bookTitle.textContent = myLibrary[myLibrary.length - 1]['title'];
    bookAuthor.textContent = myLibrary[myLibrary.length - 1]['author'];
    bookPages.textContent = myLibrary[myLibrary.length - 1]['pages'] + " pages.";
    bookRead.textContent = myLibrary[myLibrary.length - 1]['read'];
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.setAttribute("type", "button");
    addedBook.appendChild(bookTitle);
    addedBook.appendChild(bookAuthor);
    addedBook.appendChild(bookPages);
    addedBook.appendChild(bookRead);
    addedBook.appendChild(deleteBtn);
    console.log(addedBook);
    bookShelf.appendChild(addedBook);
    return addedBook;
}






function addBookToLibrary() {
    let userTitle = document.getElementById("title").value;
    let userAuthor = document.getElementById("author").value;
    let userPages = document.getElementById("pages").value;
    let userRead = document.getElementById("read").value;
    if (userTitle == "" | userAuthor == "" | userPages == "") {
        return;
    }
    let userBook = [userTitle, userAuthor, userPages, userRead];
    userBook = new Book(userTitle, userAuthor, userPages, userRead);
    myLibrary.push(userBook);
    document.getElementById("newBookForm").reset();
    addBookToShelf();
    deleteBook();
    return userBook;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

let addBtn = document.getElementById("addBtn");

if (addBtn) {
    addBtn.addEventListener("click", addBookToLibrary);
}
let deleteBtn = document.getElementsByClassName("deleteBtn");



