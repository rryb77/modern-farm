import { Food } from './food.js'

export const Catalog = (food) => {
    const contentElement = document.querySelector(".container")

    for (let item of food) {
        const foodHTML = Food(item)
        contentElement.innerHTML += foodHTML
    }
    
}