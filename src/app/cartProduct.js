import { updateTotalCost } from "../core/functions";
import { cartProductTemplate, productCartGroup } from "../core/selector"

export const createCartProduct = (product,quantity) => {
    const template = cartProductTemplate.content.cloneNode(true);
    template.querySelector(".product-cart").setAttribute("product-id",product.id)
    template.querySelector(".product-cart-img").src = product.img;
    template.querySelector(".product-cart-title").innerText = product.name;
    template.querySelector(".product-cart-brand-img").src = product.brandImg.black;
    template.querySelector(".product-cart-quantity").innerText = quantity;
    template.querySelector(".product-cart-cost").innerText = quantity*product.price;
    template.querySelector(".product-cart-price").innerText = product.price;

    return template;
}


export const productCartObserver = () => {
    const run = () => {
        updateTotalCost()
    }

    const observerOption = {
        childList: true,
        subtree: true,
    }

    const observer = new MutationObserver(run);
    observer.observe(productCartGroup,observerOption)
}