const dec = document.getElementsByClassName("product__quantity-control_dec");
const inc = document.getElementsByClassName("product__quantity-control_inc");
const quantityValue = document.getElementsByClassName("product__quantity-value");
const productAdd = document.getElementsByClassName("product__add");
const cartProducts = document.querySelector(".cart__products");
const product = document.getElementsByClassName("product");
const productImage = document.getElementsByClassName("product__image");
const cartProduct = document.getElementsByClassName("cart__product");



for (let i = 0; i < product.length; i++) {

    function decQuantity() {
        if (quantityValue[i].textContent == 1) {
            quantityValue[i].textContent = 1
        } else {
            quantityValue[i].textContent--;
        }
    }
    
    function incQuantity() {
        quantityValue[i].textContent++;
    }

    function addProduct() {
        let productId = product[i].getAttribute("data-id");
        for (let i = 0; i < cartProduct.length; i++) {
            if (productId === cartProduct[i].getAttribute("data-id")) {
                let cartProductCount = document.getElementsByClassName("cart__product-count");
                cartProductCount[i].textContent = Number(cartProductCount[i].textContent) + Number(quantityValue[i].textContent);
                return false;
            }
        }
        
        const cloneProduct = product[i].cloneNode(false);
        const cloneProductImage = productImage[i].cloneNode(false);
        let cartProductCountFirst = document.createElement("div");

        cloneProduct.classList.remove("product");
        cloneProduct.classList.add("cart__product");
        cloneProductImage.classList.remove("product__image");
        cloneProductImage.classList.add("cart__product-image");
        cartProducts.appendChild(cloneProduct);
        
        cartProductCountFirst.classList.add("cart__product-count");
        cartProductCountFirst.textContent = quantityValue[i].textContent;
        cloneProduct.appendChild(cartProductCountFirst);
        cloneProduct.appendChild(cloneProductImage);
    }
    
    dec[i].onclick = decQuantity;
    inc[i].onclick = incQuantity;
    productAdd[i].onclick = addProduct;
}