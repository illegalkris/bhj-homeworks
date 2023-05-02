let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    const loader = document.querySelector(".loader");
    loader.classList.remove("loader_active");
    const valute = xhr.response.response.Valute;
    const items = document.getElementById("items");
    for (let i = 0; i < Object.keys(valute).length; i++) {
        const itemCharCode = valute[Object.keys(valute)[i]];
        const item = document.createElement("div");
        item.classList.add("item");
        const itemCode = document.createElement("div");
        itemCode.classList.add("item__code");
        itemCode.append(`${itemCharCode.CharCode}`);
        const itemValue = document.createElement("div");
        itemValue.classList.add("item__value");
        itemValue.append(`${itemCharCode.Value}`);
        const itemCurrency = document.createElement("div");
        itemCurrency.classList.add("item__currency");
        itemCurrency.append("руб.");
        item.appendChild(itemCode);
        item.appendChild(itemValue);
        item.appendChild(itemCurrency);
        items.appendChild(item);
    }
}