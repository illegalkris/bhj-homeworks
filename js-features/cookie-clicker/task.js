const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

let flag = true;
let lastClickTime = 0;
let clickCount = 0;
let clickSpeed = 0;
function changeS() {
    if (flag) {
        image.width = 400;
        counter.textContent++;
        flag = false;
    } else {
        image.width = 200;
        counter.textContent++;
        flag = true;
    }

    clickCount++;
    const currentTime = new Date().getTime();
    let timeDiff = currentTime - lastClickTime;
    if (timeDiff !== 0) {
        clickSpeed = clickCount / timeDiff * 1000;
    }

    lastClickTime = currentTime;
    speed.textContent = clickSpeed.toFixed(2);
};




image.onclick = changeS;
