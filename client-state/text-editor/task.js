const textarea = document.getElementById("editor");

function writeToLocalStorage() {
    const inputText = document.getElementById("editor").value;
    localStorage.setItem("inputText", inputText);
    console.log(localStorage.inputText);
}
function writeToTextarea(text) {
    textarea.value = text;
}

textarea.addEventListener("input", writeToLocalStorage);
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.inputText) {
        writeToTextarea(localStorage.inputText)
    }
});

