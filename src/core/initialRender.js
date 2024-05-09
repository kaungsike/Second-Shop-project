import { categoryRender } from "../app/category";
import { productRender } from "../app/product";
import { brands, products } from "./variables";

const initialRender = () => {
    categoryRender(brands);
    productRender(products);
}

export default initialRender;