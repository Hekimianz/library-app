let myLibrary = [];
let bookFormDiv = document.createElement('div');
let mainDiv = document.querySelector('#mainCont');
mainDiv.appendChild(bookFormDiv);
bookFormDiv.id = "bookFormDiv";
bookFormDiv.style.display = 'none';
let closeForm = document.createElement('button');
closeForm.innerHTML = '<span class="material-symbols-outlined">close</span>';
closeForm.id = 'closeForm';
bookFormDiv.appendChild(closeForm);
let bookFormH = document.createElement('h2');
bookFormDiv.appendChild(bookFormH);
bookFormH.innerHTML = "Add New Book";
let bookForm = document.createElement('form');
bookFormDiv.appendChild(bookForm);
bookForm.id = 'bookForm';


closeForm.addEventListener('click', function () {
    bookFormDiv.style.display = 'none';
    bookForm.reset();
})


let uTitle = document.createElement('input');
let uAuthor = document.createElement('input');
let uPages = document.createElement('input');
let uRead = document.createElement('button');
bookForm.appendChild(uTitle);
bookForm.appendChild(uAuthor);
bookForm.appendChild(uPages);
bookForm.appendChild(uRead);
uRead.type = 'button';
uTitle.id = 'uTitle';
uAuthor.id = 'uAuthor';
uPages.id = 'uPages';
uPages.type = 'number'
uRead.id = 'uRead';
uRead.innerText = 'READ';

uRead.addEventListener('click', function () {
    if (uRead.innerText == 'READ') {
        uRead.innerText = 'NOT READ';
        uRead.style.backgroundColor = "rgb(205, 0, 0)"
    }
    else if (uRead.innerText == 'NOT READ') {
        uRead.innerText = 'READ';
        uRead.style.backgroundColor = "rgb(0, 205, 0)";

    }
})

let uSubmit = document.createElement('button');
bookFormDiv.appendChild(uSubmit);
uSubmit.innerHTML = 'Add Book';
uSubmit.id = 'uSubmit';

let formTitle;
let formAuthor;
let formPages;
let formStatus;

uSubmit.addEventListener('click', function () {
    formTitle = uTitle.value;
    formAuthor = uAuthor.value;
    formPages = uPages.value;
    if (uRead.innerText == 'READ') {
        formStatus = true;

    }
    else if (uRead.innerText == 'NOT READ') {
        formStatus = false;


    }

    if (uTitle.value !== '' && uAuthor.value !== '' && uPages.value !== '') {

        myLibrary.push(new Book(formTitle, formAuthor, formPages, formStatus, i));
        bookForm.reset();
        bookFormDiv.style.display = "none";

        displayBook();
        i = i + 1;
        uRead.innerText = 'READ';
        uRead.style.backgroundColor = "rgb(0, 205, 0)";
        return i;

    }
    else {
        alert('Please fill out all fields correctly.');
    }



})

uTitle.placeholder = "Book's Title";
uAuthor.placeholder = "Book's Author";
uPages.placeholder = "Book's Pages";

function Book(title, author, pages, status, objectNum) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.objectNum = objectNum;

}

let i = 0;
function addBookToLibrary() {

    let readStatus = false;
    bookFormDiv.style.display = 'flex';


    myLibrary.push(new Book(uTitle.value, uAuthor.value, uPages.value, readStatus, i));
    displayBook();
    i = i + 1;
    return i;

}

let addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', function () {
    bookFormDiv.style.display = 'flex';

})

let bookShelf = document.querySelector('#bookShelf');

function displayBook() {

    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookShelf.appendChild(bookCard);
    let bookTitle = document.createElement('span');
    bookTitle.innerHTML = myLibrary[myLibrary.length - 1].title;
    let bookAuthor = document.createElement('span');
    bookAuthor.innerHTML = myLibrary[myLibrary.length - 1].author;
    let bookPages = document.createElement('span');
    bookPages.innerHTML = myLibrary[myLibrary.length - 1].pages + ' Pages';
    let bookStatusDiv = document.createElement('div');
    let bookStatusSpan = document.createElement('span');
    let bookStatusBtn = document.createElement('button');
    bookStatusSpan.innerHTML = 'Read: ';
    bookStatusDiv.appendChild(bookStatusSpan);
    bookStatusDiv.appendChild(bookStatusBtn);
    bookStatusDiv.style.display = 'flex';
    bookStatusDiv.style.justifyContent = 'center';
    bookStatusDiv.style.alignContent = 'center';
    bookStatusDiv.style.gap = '10px';


    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookStatusDiv);

    bookStatusBtn.style.width = '25px';
    bookStatusBtn.style.height = '25px';
    bookStatusBtn.style.borderRadius = '50%';
    bookStatusBtn.innerText = '';

    if (uRead.innerText == 'READ') {
        bookStatusBtn.innerText = 'Y';
        bookStatusBtn.style.backgroundColor = "rgb(0, 250, 0)";
    }
    else if (uRead.innerText == 'NOT READ') {
        bookStatusBtn.innerText = 'N';
        bookStatusBtn.style.backgroundColor = "#A6A6A6";
    }

    bookStatusBtn.addEventListener('click', function () {
        if (bookStatusBtn.innerText == 'Y') {
            bookStatusBtn.innerText = 'N';
            bookStatusBtn.style.backgroundColor = "#A6A6A6";
            myLibrary[deleteBookBtn.dataset.objectNum].status = false;
        }
        else if (bookStatusBtn.innerText == 'N') {
            bookStatusBtn.innerText = 'Y';
            bookStatusBtn.style.backgroundColor = "rgb(0, 250, 0)";
            myLibrary[deleteBookBtn.dataset.objectNum].status = true;
        }
    })

    let deleteBookBtn = document.createElement('button');
    bookCard.appendChild(deleteBookBtn);
    deleteBookBtn.innerHTML = 'Delete Book';
    deleteBookBtn.classList.add('delBtn');
    deleteBookBtn.dataset.objectNum = i;


    deleteBookBtn.addEventListener('click', function () {
        deleteBookBtn.parentElement.remove();
        myLibrary.splice(deleteBookBtn.dataset.objectNum, 1);

    })
};











