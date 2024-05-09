import { productGroup, productTemplate } from "../core/selector"

export const createProduct = (product) => {
    const template = productTemplate.content.cloneNode(true);
    template.querySelector(".product-img").src = product.img;
    template.querySelector(".product-title").innerText = product.name;
    template.querySelector(".product-brand-img").src = product.brandImg.white;
    template.querySelector(".product-price").innerText = (product.price).toFixed(2);
    template.querySelector(".product-rate").innerText = product.rating;
    
    return template;
}

export const productRender = (products) => {
    products.forEach((e) => productGroup.append(createProduct(e)))
}