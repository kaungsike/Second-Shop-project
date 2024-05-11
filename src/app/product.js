import { productCartGroup, productGroup, productTemplate } from "../core/selector"
import { createStar } from "./star";

export const createProduct = (product) => {
    const template = productTemplate.content.cloneNode(true);
    template.querySelector(".product-card").setAttribute("product-id",product.id)
    template.querySelector(".product-img").src = product.img;
    template.querySelector(".product-title").innerText = product.name;
    template.querySelector(".product-brand-img").src = product.brandImg.white;
    template.querySelector(".product-price").innerText = (product.price).toFixed(2);
    template.querySelector(".product-rate").innerText = product.rating;

    template.querySelector(".product-star").innerHTML = createStar(product.rating);

    const isExisted = productCartGroup.querySelector(`[product-id='${product.id}']`)
    
    if(isExisted){
        template.querySelector(".add-to-cart-btn").setAttribute("disabled",true)
        template.querySelector(".add-to-cart-btn").innerText = "Att to cart"
    }

    return template;
}

export const productRender = (products) => {
    productGroup.innerHTML = "";
    products.forEach((e) => productGroup.append(createProduct(e)))
}