const fieldArray = []

export const addPlant = (seed) => {

        if (Array.isArray(seed)){
            for (const corn of seed){
                fieldArray.push(corn)
            }
            } else {
            fieldArray.push(seed)
        }
    return fieldArray
}

export const usePlants = () => {
    return fieldArray.slice()
}