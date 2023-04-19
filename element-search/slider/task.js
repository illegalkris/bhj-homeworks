const prev = document.getElementsByClassName("slider__arrow_prev");
const next = document.getElementsByClassName("slider__arrow_next");
const items = document.getElementsByClassName("slider__item");

function switchToPrev() {
    let arrayItems = Array.from(items);
    let index = arrayItems.findIndex(item => item.classList.contains("slider__item_active")); 
    items[index].classList.remove("slider__item_active");
    if (index === 0) {
        index = items.length - 1;
    } else {
        index--;
    }

    items[index].classList.add("slider__item_active");
}

function switchToNext() {
    let arrayItems = Array.from(items);
    let index = arrayItems.findIndex(item => item.classList.contains("slider__item_active")); 
    items[index].classList.remove("slider__item_active");
    if (index === items.length - 1) {
        index = 0
    } else {
        index++;
    }

    items[index].classList.add("slider__item_active");
}

prev[0].onclick = switchToPrev;
next[0].onclick = switchToNext;