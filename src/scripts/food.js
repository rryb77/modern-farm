/**
 *  Fish which renders individual fish objects as HTML
 */
export const Food = (food) => {
    return `
    <section class="plant">${food.type}</section>
    `
  }