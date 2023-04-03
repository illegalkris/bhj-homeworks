const prev = document.getElementsByClassName("slider__arrow_prev");
const next = document.getElementsByClassName("slider__arrow_next");
const items = document.getElementsByClassName("slider__item");

let index = 0;
function switchToPrev() {
    items[index].classList.remove("slider__item_active");
    if (index === 0) {
        index = 4;
    } else {
        index--;
    }

    items[index].classList.add("slider__item_active");
}

function switchToNext() {
    items[index].classList.remove("slider__item_active");
    if (index === 4) {
        index = 0
    } else {
        index++;
    }

    items[index].classList.add("slider__item_active");
}

prev[0].onclick = switchToPrev;
next[0].onclick = switchToNext;