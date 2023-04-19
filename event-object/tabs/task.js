const tab = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tab__content");
const tabActive = document.getElementsByClassName("tab_active");
const tabContentActive = document.getElementsByClassName("tab__content_active");


for (let i = 0; i < tab.length; i++) {
    function makeActive() {
        if (tabActive[0] != undefined) {
            tabActive[0].classList.remove("tab_active");
            tabContentActive[0].classList.remove("tab__content_active");
        }
            
        tab[i].classList.add("tab_active");
        tabContent[i].classList.add("tab__content_active");
    }

    tab[i].onclick = makeActive;
}