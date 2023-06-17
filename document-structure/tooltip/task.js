const hasTooltip = document.querySelectorAll(".has-tooltip");

let windowPosition = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight
}

function addTooltips() {
    for (let i = 0; i < hasTooltip.length; i++) {

        let elementPosition = {
            top: window.pageYOffset + hasTooltip[i].getBoundingClientRect().top,
            bottom: window.pageYOffset + hasTooltip[i].getBoundingClientRect().bottom
        }
    
        if (windowPosition.bottom > elementPosition.bottom) {
            tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            let title = hasTooltip[i].getAttribute("title")
            tooltip.textContent = title;
            hasTooltip[i].appendChild(tooltip);
        } 

        // hasTooltip[i].removeChild();
    }
}





// for (let i = 0; i < hasTooltips.length; i++) {
//     function showTooltip(valueLink) {
//         let textLink;
//         if (textLink === valueLink) {
//             return
//         } else {
            
//             hasTooltips[i].classList.toggle("tooltip_active");
//             const textLink = hasTooltips[i].childNodes[0].nodeValue;
//             console.log(textLink)
//         }
        

        
//     }

//     hasTooltips[i].addEventListener("click", event => {
//         event.preventDefault();
//         valueLink = hasTooltips[i].childNodes[0].nodeValue;
//         showTooltip(valueLink);
//     })
// }

/*
 1. элемент подсказки есть в DOM если текст виден
           

 2. при клике добавляем класс tooltip_active
*/