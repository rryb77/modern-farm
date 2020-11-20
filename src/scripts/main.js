console.log("Welcome to the main module")
// import function from plan.js
import { createPlan } from './plan.js'

// import seeds from scripts/seeds:
// import { createAsparagus } from './seeds/asparagus.js'
// import { createCorn } from './seeds/corn.js'
// import { createPotato } from './seeds/potato.js'
// import { createSoybean } from './seeds/soybean.js'
// import { createSunflower } from './seeds/sunflower.js'
// import { createWheat } from './seeds/wheat.js'


// import functions from field.js
// import { addPlant } from './field.js'
import { usePlants } from './field.js'

// import functions from tractor.js
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'

// call functions
const yearlyPlan = createPlan()

// tractor.js
plantSeeds(yearlyPlan)
const plantedSeeds = usePlants()
console.log('Testing plantSeeds from tractor.js', plantedSeeds)

const testHarvest = harvestPlants(plantedSeeds)
console.log('Looking for harvest array from harvester.js', testHarvest)
// testing seed functions via console
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const cornSeed = createCorn()
// console.log(cornSeed)

// const potatoSeed = createPotato()
// console.log(potatoSeed)

// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// const wheatSeed = createWheat()
// console.log(wheatSeed)



// testing Tilling the Field
// addPlant(asparagusSeed)
// let plantLife = usePlants()
// console.log(plantLife)