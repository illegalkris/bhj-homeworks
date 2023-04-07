const rotatorCase = document.getElementsByClassName("rotator__case");

let index = 0;
function addClassActive() {
    rotatorCase[index].classList.remove("rotator__case_active");
    if (index === 5) {
        index = 0
    } else {
        index++;
    }
    
    rotatorCase[index].classList.add("rotator__case_active");
}

setInterval(addClassActive, 1000);