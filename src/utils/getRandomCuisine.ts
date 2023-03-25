const MAX_DEX_ID = 10;


export const getRandomCuisine: (notThisOne?: number ) => number = (notThisOne?: number) => {
    const cuisineNum = Math.floor(Math.random()* MAX_DEX_ID) + 1;

    if(cuisineNum !== notThisOne) return cuisineNum;
    return getRandomCuisine(notThisOne);
}

export const getOptionsForVote = () => {
    const firstId = getRandomCuisine();
    const secondId = getRandomCuisine(firstId);

    return [firstId, secondId];
}