const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.getElementById("chat-widget__input");
const chatWidgetMessages = document.getElementById("chat-widget__messages");
const arrMessages = [
    "К сожалению все операторы заняты, не пишите нам больше!",
    "Извините, я не хочу с Вами разговаривать!",
    "Напишите кому-нибудь другому, пожалуйста.",
    "Я отвечу Вам чуть позже, как насчёт никогда?",
    "Вы у нас ничего ещё не купили, сначала купите, а потом пишите."
]

let count = 0;
function makeActive() {
    let time = new Date;
    currentTime = time.toLocaleTimeString().slice(0, 5);
    chatWidget.classList.add("chat-widget_active");
    if (count === 0) {
        chatWidgetMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">Добрый день!</div>
        </div>
        ` ;
    }
    count++;
}

function addMessage(message) {
    let time = new Date;
    currentTime = time.toLocaleTimeString().slice(0, 5);
    chatWidgetMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">${message}</div>
        </div>
        ` ;
    let rand = Math.floor(Math.random() * arrMessages.length);
    chatWidgetMessages.innerHTML += `
    <div class="message">
        <div class="message__time">${currentTime}</div>
        <div class="message__text">${arrMessages[rand]}</div>
    </div>
    `
}



chatWidget.addEventListener("click", makeActive);
document.addEventListener("keyup", (event) => {
    let enteredText = chatWidgetInput.value;
    enteredText.trim();
    if (event.keyCode === 13 && enteredText != "") {
        addMessage(enteredText);
        chatWidgetInput.value = "";
    };
})