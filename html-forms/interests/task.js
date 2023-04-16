const interestCheck = document.querySelectorAll(".interest__check");
const interest = document.querySelectorAll(".interest")

// function isChecked() {
//     for (let i = 0; i < interestCheck.length; i++) {
//         if (interestCheck[i].checked) {
//             console.log(interestCheck[i].closest())
//             interestCheck[i].nextElementSibling.checked;
//         }
//     }
//     if (interestCheck[0].checked) {
//         debugger;
//         console.log(interestCheck[0].closest(".interest__check"));
//         interestCheck[0].closest(".interest__check").checked = true;
//     }
// }

// function isChecked() {
//     if (interestCheck[0].checked === true) {
//         console.log(interestCheck[0].parentElement.nextElementSibling);
//     }
// }

/*
 и так, я совершенно не понимаю как реализовать логику данного задания
 самый грубый метод, зная номера элементов задать их просто цифрами
 то есть interestCheck[1] и interestCheck[2] становятся checked когда interestCheck[0].checked === true
 Но, это какой-то глупый метод и его реализовывать не хочу
 Ещё была мысль найти соседний элемент interestCheck[0] если он выбран
 и найти дочерние элементы этого соседнего элемента, но там какая-то очень большая вложенность,
 и в целом не хочу привязывать решение к количеству вложенных элементов.

 По вёрстке как-то странно сделано, checkbox[0] и checkbox[1 и 2] как бы соседние элементы, 
 но они ещё и вложены в другие элементы, поэтому просто через соседние их не найти

 В общем я не знаю как это сделать.
*/

for (let i = 0; i < interestCheck.length; i++) {
    interestCheck[i].onclick = isChecked;
}