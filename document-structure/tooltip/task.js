const hasTooltips = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < hasTooltips.length; i++) {
    function showTooltip() {
        
        tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        let title = hasTooltips[i].getAttribute("title")
        tooltip.textContent = title;
        tooltip.classList.toggle("tooltip_active");
        hasTooltips[i].appendChild(tooltip);

        let windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        },
        elementPosition = {
            top: window.pageYOffset + tooltip.getBoundingClientRect().top,
            bottom: window.pageYOffset + tooltip.getBoundingClientRect().bottom
        }
        console.log(windowPosition, elementPosition);
    }

    hasTooltips[i].addEventListener("click", event => {
        event.preventDefault();
        showTooltip();
    })
}

/*
 1. элемент подсказки есть в DOM если текст виден

 2. при клике добавляем класс tooltip_active
*/