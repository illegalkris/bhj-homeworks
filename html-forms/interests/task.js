const interestsMain = document.querySelector(".interests_main");
const ul = interestsMain.firstElementChild;
const parentInterest = ul.children;

for (let i = 0; i < parentInterest.length; i++) {
    const label = parentInterest[i].firstElementChild;
    const parentInterestCheck = label.firstElementChild;
    const childCheck = parentInterest[i].lastElementChild;

    function isChecked() {
        if (parentInterestCheck.checked) {
            const interestChildLi = childCheck.children;
            for (let i = 0; i < interestChildLi.length; i++) {
                const interestChild = interestChildLi[i].firstElementChild;
                const childInput = interestChild.firstElementChild;
                childInput.checked = true;
            }
        } else {
            const interestChildLi = childCheck.children;
            for (let i = 0; i < interestChildLi.length; i++) {
                const interestChild = interestChildLi[i].firstElementChild;
                const childInput = interestChild.firstElementChild;
                childInput.checked = false;
            }
        }
    }

    parentInterestCheck.onclick = isChecked;
}