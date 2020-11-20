const harvestedArray = []

export const harvestPlants = (plants) => {
    for (let plant of plants) {
       
        // Iterate the array of growing plants. On each plant, get the value of the output property.
        // Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
        
        
        if (plant.type === 'Corn') {
            let cornHalf = plant.output / 2
            for (let i = 0; i < cornHalf; i++) {
                harvestedArray.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedArray.push(plant)
            }
        }
    }
    return harvestedArray 
}