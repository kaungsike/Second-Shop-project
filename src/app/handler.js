
import Swal from "sweetalert2";
import { addQuantity, productCartRemove, subQuantity, updateProductCartNumber, updateTotalCost } from "../core/functions";
import { cartBtn, productCartGroup } from "../core/selector";
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
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Item Added"
          });
          const currentProductCard = e.target.closest(".product-card");
          const currentImg = currentProductCard.querySelector(".product-img");

          
          
          const animateImg = new Image();
          animateImg.src = currentImg.src;
          animateImg.style.position ="fixed";
          animateImg.style.top = currentImg.getBoundingClientRect().top + "px";
          animateImg.style.left = currentImg.getBoundingClientRect().left + "px";
          animateImg.style.width = currentImg.getBoundingClientRect().width + "px";
          animateImg.style.height = currentImg.getBoundingClientRect().height + "px";
          document.body.append(animateImg);

          animateImg.animate([
            {
                top :currentImg.getBoundingClientRect().top + "px",
                left :currentImg.getBoundingClientRect().left + "px",
            },
            {
                top : cartBtn.querySelector("svg").getBoundingClientRect().top + "px",
                left : cartBtn.querySelector("svg").getBoundingClientRect().left + "px",
                width : "0px",
                height: "0px",
                transform : "rotate(1.2turn)"
            }
          ],500).addEventListener("finish", () => {
            animateImg.remove()
            cartBtn.classList.add("animate__animated","animate__tada");
            cartBtn.addEventListener("animationend", () => {
                cartBtn.classList.remove("animate__tada")
            })
          })
  
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