import { categoryNameGroupHandler, productCartGroupHandler, productGroupHandler } from "../app/handler"
import { categoryNameGroup, productCartGroup, productGroup } from "./selector"

const listener = () => {
    categoryNameGroup.addEventListener("click",categoryNameGroupHandler);
    productGroup.addEventListener("click",productGroupHandler);
    productCartGroup.addEventListener("click",productCartGroupHandler)
}

export default listener;