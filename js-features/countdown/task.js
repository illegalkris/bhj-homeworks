const timer = document.getElementById("timer");

function changeTimer() {
    timer.textContent--;
    if(timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(changeTimer, 1000);


