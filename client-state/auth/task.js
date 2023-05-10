const signinForm = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const btn = document.getElementById("signin__btn");
const form = document.getElementById("signin__form");
const formText = form.innerHTML;
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/auth");
xhr.responseType = "json";

signin.classList.add("signin_active");
btn.onclick = () => {
    console.log(formText);
    xhr.send()
}

// ссылка для запроса у меня не открывается, так и должно быть?