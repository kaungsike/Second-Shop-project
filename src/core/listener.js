import { categoryNameGroupHandler } from "../app/handler"
import { categoryNameGroup } from "./selector"

export const listener = () => {
    categoryNameGroup.addEventListener("click",categoryNameGroupHandler)
}