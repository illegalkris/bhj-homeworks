document.getElementById("modal_main").style.display = "flex";

const close = document.getElementsByClassName("modal__close");
const success = document.getElementsByClassName("show-success");

function closeWindow() {
    document.getElementById("modal_main").style.display = "none";
    document.getElementById("modal_success").style.display = "none";
}

function showSuccess() {
    document.getElementById("modal_success").style.display = "flex";
}

for (let i = 0; i < close.length; i ++) {
    close[i].onclick = closeWindow;
}

success[0].onclick = showSuccess;