const signinForm = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})
signin.classList.add("signin_active");
form.onsubmit = (() => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";  
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    let formData = new FormData(form);
    xhr.send(formData);
    console.log(xhr.response);
})