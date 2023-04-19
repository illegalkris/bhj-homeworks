const dropdown = document.getElementsByClassName("dropdown__value");
const dropdownList = document.getElementsByClassName("dropdown__list");
const dropdownItem = document.getElementsByClassName("dropdown__item");

let flag = true;
function activateList() {
    if (flag) {
        dropdownList[0].classList.add("dropdown__list_active");
        flag = false;
    } else {
        dropdownList[0].classList.remove("dropdown__list_active");
        flag = true;
    }

    return false;
}

dropdown[0].onclick = activateList;

for (let i = 0; i < dropdownItem.length; i++) {
    function activateItem() {
        dropdown[0].textContent = dropdownItem[i].textContent;
        dropdownList[0].classList.remove("dropdown__list_active");
        flag = true;
        return false;
    }

    dropdownItem[i].onclick = activateItem;
}

