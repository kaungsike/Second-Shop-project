
import Swal from "sweetalert2";
import { updateProductCartNumber, updateTotalCost } from "../core/functions";
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
        productCartGroup.append(createCartProduct(currentProduct,1));
        updateProductCartNumber()
        updateTotalCost()
    }
}

export const productCartGroupHandler = (e) => {
    if(e.target.classList.contains("product-cart-del-btn")){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            e.target.closest(".product-cart").remove()
            updateTotalCost();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
}
// e.target.closest(".product-cart").remove()