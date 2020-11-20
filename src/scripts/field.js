// empty array to be used below
const fieldArray = []

// add plant to the fieldArray
export const addPlant = (seed) => {
        // is it corn which is objects stored in an array?
        if (Array.isArray(seed)){
            // yes - loop through seed to add each corn object in the array
            for (const corn of seed){
                fieldArray.push(corn)
            }
            //no - just push it on through!
            } else {
            fieldArray.push(seed)
        }
    // can't do anything if we don't return it!
    return fieldArray
}

// create a copy of the fieldArray and place it in usePlants
export const usePlants = () => {
    return fieldArray.slice()
}