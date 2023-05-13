const modal = document.getElementById("subscribe-modal");
const close = document.getElementsByClassName("modal__close")[0];

document.addEventListener("DOMContentLoaded", () => {
    if (!document.cookie) {
        modal.classList.add("modal_active");
    } else {
        return;
    }
})

close.onclick = () => {
    modal.classList.remove("modal_active");
    document.cookie = "flag=true";
}