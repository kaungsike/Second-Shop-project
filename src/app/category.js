import { categoryNameGroup, categoryTemplate } from "../core/selector"

export const createCategory = (category) => {
    const template = categoryTemplate.content.cloneNode(true);
    template.querySelector(".category-name").innerText = category

    return template;
}

export const categoryRender = (categories) => {
    categories.forEach((e) => categoryNameGroup.append(createCategory(e)));
}