const menu = document.getElementsByClassName("menu")
const menuSub = document.getElementsByClassName("menu_sub");

for (let i = 0; i < menuSub.length; i++) {
    let menuItem =  menuSub[i].closest(".menu__item");
    let menuLink = menuItem.getElementsByClassName("menu__link")[0];
    function menuOpening() {
        let menuActive = document.querySelector(".menu_active");
        if (menuSub[i].classList.contains("menu_active")) {
            menuSub[i].classList.remove("menu_active");

            return false;
        } else {
            if (menuActive) {
                menuActive.classList.remove("menu_active");
            }
            menuSub[i].classList.toggle("menu_active");
    
            return false;
        }
    }

    menuLink.onclick = menuOpening;
}