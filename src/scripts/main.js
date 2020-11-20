console.log("Welcome to the main module")
// import function from plan.js
import { createPlan } from './plan.js'

// import functions from field.js
import { usePlants } from './field.js'

// import functions from tractor.js
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'

import { Catalog } from './catalog.js'

// call functions
const yearlyPlan = createPlan()

// testing tractor.js
plantSeeds(yearlyPlan)
const plantedSeeds = usePlants()
console.log('Testing plantSeeds from tractor.js', plantedSeeds)

// testing harvester.js
const theHarvest = harvestPlants(plantedSeeds)
console.log('Looking for harvest array from harvester.js', theHarvest)

Catalog(theHarvest)