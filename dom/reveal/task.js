const reveal = document.querySelectorAll(".reveal")

let index = 0;

function elIsVisible() {
    let windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    },
    elementPosition = {
        top: window.pageYOffset + reveal[index].getBoundingClientRect().top,
        bottom: window.pageYOffset + reveal[index].getBoundingClientRect().bottom
    }

    if (windowPosition.bottom > elementPosition.bottom) {
        reveal[index].classList.add("reveal_active");
    }

    if(windowPosition.top > elementPosition.bottom && index === 0) {
        index++;
    }
}

document.addEventListener("scroll", elIsVisible);