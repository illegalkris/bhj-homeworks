const fontSize = document.getElementsByClassName("font-size");
const fontSizeActive = document.getElementsByClassName("font-size_active");
const book = document.getElementById("book");

class Book {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    big() {
        let desiredElement = document.querySelector(".font-size_big");
        if (fontSizeActive) {
            fontSizeActive[0].classList.remove("font-size_active");
        }
        desiredElement.classList.toggle("font-size_active");
        book.classList.remove("book_fs-small");
        book.classList.add("book_fs-big");
    }
    
    small() {
        let desiredElement = document.querySelector(".font-size_small");
        if (fontSizeActive) {
            fontSizeActive[0].classList.remove("font-size_active");
        }
        desiredElement.classList.toggle("font-size_active");
        book.classList.remove("book_fs-big");
        book.classList.add("book_fs-small");
    }
    
    onClick(event) {
        let size = event.target.dataset.size;
        if (size) {
            this[size]();
            return false;
        }
    }
}

new Book(book);
