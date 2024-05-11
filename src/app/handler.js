
import { addQuantity, productCartRemove, subQuantity, updateProductCartNumber, updateTotalCost } from "../core/functions";
import { productCartGroup } from "../core/selector";
import { products } from "../core/variables";
import { createCartProduct } from "./cartProduct";
import { productRender } from "./product";

export const categoryNameGroupHandler = (e) => {
    if(e.target.classList.contains("category-name")){
        // console.log(e.target.innerText);
        const currentCategoryName = e.target.innerText;
        document.querySelector(".active")?.classList.remove("active")
        e.target.classList.add("active")
        if(currentCategoryName==="All"){
            productRender(products)
        }
        else{
            productRender(products.filter((el) => el.brand==currentCategoryName))
        }
    }
}

export const productGroupHandler = (e) => {
    if(e.target.classList.contains("add-to-cart-btn")){
        const currentProductCard = e.target.closest(".product-card");
        e.target.setAttribute("disabled",true)
        e.target.innerText = "Added"
        const currentProductId = parseInt(currentProductCard.getAttribute("product-id"));
        const currentProduct = products.find((el) => el.id===currentProductId) ;
        productCartGroup.append(createCartProduct(currentProduct,1));
        updateProductCartNumber()
        updateTotalCost()
    }
}

export const productCartGroupHandler = (e) => {
    if(e.target.classList.contains("product-cart-del-btn")){
        productCartRemove(e)
    }
    else if(e.target.classList.contains("cart-q-add")){
        addQuantity(e)
    }
    else if(e.target.classList.contains("cart-q-sub")){
        subQuantity(e)
    }
    updateTotalCost()
}
// e.target.closest(".product-cart").remove()