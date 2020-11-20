// Create the seed array of objects
const cornArray = [
    {
        type: "Corn",
        height: 180,
        output: 6
    },
    {
        type: "Corn",
        height: 180,
        output: 6
    }
]
export const createCorn = () => {
    return cornArray.slice()
}