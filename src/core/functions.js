import { productCartGroup, productCartNumber, totalCost } from "./selector"

export const updateProductCartNumber = () => {
    productCartNumber.innerText = productCartLength();
}

export const productCartLength = () => {
    return productCartGroup.querySelectorAll(".product-cart").length;
}

export const updateTotalCost = () => {
    const allCartCost = productCartGroup.querySelectorAll(".product-cart-cost");
    totalCost.innerText = 0;
    totalCost.innerText = (parseFloat(totalCost.innerText )+ [...allCartCost].reduce((pv,{innerText}) => pv+parseFloat(innerText),0)).toFixed(2)
}