const harvestedArray = []

export const harvestPlants = (plants) => {
    
    let plantIDCount = 0;

    for (let plant of plants) {
       
        // Iterate the array of growing plants. On each plant, get the value of the output property.
        // Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
        

        if (plant.type === 'Corn') {
            let cornHalf = plant.output / 2
            for (let i = 0; i < cornHalf; i++) {
                harvestedArray.push(plant);
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedArray.push(plant);
            }
        }
        
    }


    
    // Compare and sort the array alphabetically
    function compare(a, b) {
       let nameA = a.type.toUpperCase();
       let nameB = b.type.toUpperCase();

       if (nameA < nameB) {
           return -1;
       }

       if (nameA > nameB) {
           return 1;
       }

       return 0;
   }

    // Call the .sort method with the compare function
    harvestedArray.sort(compare);

    // return the sorted array
    return harvestedArray
}

