import { Food } from './food.js'

export const Catalog = (food) => {
    const contentElement = document.querySelector(".container")

    //create a new object to store the harvested plants with quantity
    let foodTotals = {
            
    }

    for (let item of food) {

        const foodHTML = Food(item)
        contentElement.innerHTML += foodHTML
        
        //if item.type (corn, etc) in foodTotals is already there then just add 1 to the total
        // if (item.type in foodTotals) {
        //     foodTotals[item.type] += 1;
        //if it's not there add it as a key and give it a quantity of 1.
        // } else {
        //     foodTotals[item.type] = 1;
        // }
    }
    
    //loop through the footTotals object
    // for (let food in foodTotals) {
        //send it to the DOM, bracket notation is used because I don't know where I'm at in the loop
    //     contentElement.innerHTML += `
    //     <h3>${food}</h3>
    //     <div>Total: ${foodTotals[food]}</div>
    // `
    // }
    
}