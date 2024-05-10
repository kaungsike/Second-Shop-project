import { productCartGroup } from "../core/selector";
import { products } from "../core/variables";
import { createCartProduct } from "./cartProduct";
import { productRender } from "./product";

export const categoryNameGroupHandler = (e) => {
    if(e.target.classList.contains("category-name")){
        // console.log(e.target.innerText);
        const currentCategoryName = e.target.innerText;
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
        const currentProductId = parseInt(currentProductCard.getAttribute("product-id"));
        const currentProduct = products.find((el) => el.id===currentProductId) ;
        productCartGroup.append(createCartProduct(currentProduct,1))
    }
}