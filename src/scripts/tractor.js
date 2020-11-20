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

            // define 'let seed;' with no value outside the switch statement
            let seed;
            // switch statement to invoke the proper creation of each seed in the array
            switch (plant) {

                case 'Asparagus':
                    seed = createAsparagus()
                    break;

                case 'Corn':
                    seed = createCorn()
                    break;
                    
                case 'Potato':
                    seed = createPotato()
                    break;

                case 'Soybean':
                    seed = createSoybean()
                    break;
                    
                case 'Sunflower':
                    seed = createSunflower()
                    break;

                case 'Wheat':
                    seed = createWheat()
                    break;                    
            }
            // seed is properly set to createAsparagus etc because it's set outside, assigned inside, then breaks out each loop
            addPlant(seed)
        }
        // testing loop of arrays
        // console.log(plan[i]);
    }
        
}
