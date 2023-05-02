let xhr = new XMLHttpRequest();
xhr.open('GET', "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = 'json';
xhr.send();
console.log(xhr);

xhr.onload = function() {
    const pollTitle = document.getElementById("poll__title");
    let title = document.createTextNode(`${xhr.response.data.title}`);
    pollTitle.appendChild(title);
    const pollAnswers = document.getElementById("poll__answers");
    const answers = xhr.response.data.answers;
    for (let i = 0; i < answers.length; i++) {
        const answer = document.createElement("button");
        answer.classList.add("poll__answer");
        const answerText = document.createTextNode(`${answers[i]}`);
        answer.appendChild(answerText);
        pollAnswers.appendChild(answer);

        answer.onclick = function() {
            alert("Спасибо, ваш голос засчитан!");
        }
    }


}