
let plantIDCount = 0;

export const countHarvest = (theHarvestArray) => {
    
    const newArray = theHarvestArray.map(harvestedCrop => {
        plantIDCount += 1;
        return {...harvestedCrop,id:plantIDCount};

    })
    return newArray
}


//map the array
// plantIDCount += 1;
// plant.id = plantIDCount;
// console.log(plant.id)
//spread operator