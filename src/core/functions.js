import Swal from "sweetalert2";
import { productCartGroup, productCartNumber, productGroup, totalCost } from "./selector"

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

export const productCartRemove = (e) => {
    Swal.fire({
        title: "Are you sure?",
        text: "Are you sure to delete it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#020617",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {     
        const currentCart = e.target.closest(".product-cart");
        const currentCartId = parseInt(currentCart.getAttribute("product-id"));
        const productCart = productGroup.querySelector(`[product-id='${currentCartId}']`)
        if(productCart){
            const productCartBtn = productCart.querySelector(".add-to-cart-btn");
            productCartBtn.removeAttribute("disabled");
            productCartBtn.innerText = "Add to cart"
        }
        currentCart.remove()
        updateTotalCost();
        updateProductCartNumber()
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Item Deleted!",
        //     icon: "success"
        //   });
        }
      });
}

export const addQuantity = (e) => {
    const currentCart = e.target.closest(".product-cart");
    const currentQuantity = currentCart.querySelector(".product-cart-quantity");
    const price = currentCart.querySelector(".product-cart-price");
    const currentCost = currentCart.querySelector(".product-cart-cost");
    currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
    currentCost.innerText = (currentQuantity.innerText * price.innerText).toFixed(2)
}

export const subQuantity = (e) => {
    const currentCart = e.target.closest(".product-cart");
    const currentQuantity = currentCart.querySelector(".product-cart-quantity");
    const price = currentCart.querySelector(".product-cart-price");
    const currentCost = currentCart.querySelector(".product-cart-cost");
    if(currentQuantity.innerText >1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
        currentCost.innerText = (currentQuantity.innerText * price.innerText).toFixed(2)
    }
    else{
        productCartRemove(e)
        updateProductCartNumber()
    }
}