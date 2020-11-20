// add the seeds to the field
import { addPlant } from "./field.js";

// can't plant without seeds, so import them below
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

// function to plant seeds
export const plantSeeds = (plan) => {
    // loop through arrays. Start with 0 and increase with each array found as long as it's less than the array length.
    for (let i = 0; i < plan.length; i++) {
        // loop through each item in each array
        for (let plant of plan[i]) {
            // testing loop of each item in each array
            // console.log(plant)
            // let seed:
            // switch statement to invoke the proper creation of each seed in the array
            switch (plant) {

                case 'Asparagus':
                    const asparagusSeed = createAsparagus()
                    addPlant(asparagusSeed)
                    break;

                case 'Corn':
                    const cornSeed = createCorn()
                    addPlant(cornSeed)
                    break;
                    
                case 'Potato':
                    const potatoSeed = createPotato()
                    addPlant(potatoSeed)
                    break;

                case 'Soybean':
                    const soybeanSeed = createSoybean()
                    addPlant(soybeanSeed)
                    break;
                    
                case 'Sunflower':
                    const sunflowerSeed = createSunflower()
                    addPlant(sunflowerSeed)
                    break;

                case 'Wheat':
                    const wheatSeed = createWheat()
                    addPlant(wheatSeed)
                    break;
                    
            }
            //addPlant(seed)
        }
        // testing loop of arrays
        // console.log(plan[i]);
    }
        
}
