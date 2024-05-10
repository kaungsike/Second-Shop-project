import { categoryNameGroupHandler, productGroupHandler } from "../app/handler"
import { categoryNameGroup, productGroup } from "./selector"

const listener = () => {
    categoryNameGroup.addEventListener("click",categoryNameGroupHandler);
    productGroup.addEventListener("click",productGroupHandler)
}

export default listener;