const menuLink = document.getElementsByClassName("menu__link");
const menu = document.getElementsByClassName("menu")

for (let i = 0; i < menuLink.length; i++) {
    function menuOpening() {
        if(menu[i].classList.contains("menu_sub")) { //значит с первым подменю всё работает, 
            // а когда второе включает не может найти classList,
            // хотя он в свойствах есть, не понимаю в чём ошибка
            menu[i].classList.add("menu_active");
        }

        return false;
    }

    menuLink[i].onclick = menuOpening;
}