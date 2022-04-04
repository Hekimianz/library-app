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
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    bookTitle.textContent = myLibrary[myLibrary.length - 1]['title'];
    bookAuthor.textContent = myLibrary[myLibrary.length - 1]['author'];
    bookPages.textContent = myLibrary[myLibrary.length - 1]['pages'] + " pages.";
    bookRead.textContent = myLibrary[myLibrary.length - 1]['read'];
    addedBook.appendChild(bookTitle);
    addedBook.appendChild(bookAuthor);
    addedBook.appendChild(bookPages);
    addedBook.appendChild(bookRead);
    addedBook.appendChild(deleteBtn);
    bookShelf.appendChild(addedBook);
    document.querySelectorAll(".deleteBtn").forEach(item => {
        item.addEventListener("click", () => {
            item.parentElement.remove();
        })
    })

    return addedBook;
}
let allBooks = document.getElementsByClassName("book");

function addBookToLibrary() {
    let userTitle = document.getElementById("title").value;
    let userAuthor = document.getElementById("author").value;
    let userPages = document.getElementById("pages").value;
    let userRead = "";
    let checkbox = document.querySelector("#read");
    if (checkbox.checked) {
        userRead = "Status: Read";
    }
    else {
        userRead = "Status: Not Read";
    }
    if (userTitle == "" | userAuthor == "" | userPages == "") {
        return;
    }
    let userBook = [userTitle, userAuthor, userPages, userRead];
    userBook = new Book(userTitle, userAuthor, userPages, userRead);
    myLibrary.push(userBook);
    document.getElementById("newBookForm").reset();
    addBookToShelf();
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

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
})



