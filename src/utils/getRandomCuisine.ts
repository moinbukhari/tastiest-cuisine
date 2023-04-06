const MAX_DEX_ID = 5;

// const countries = ["AF", "AL", "DZ", "AD", "AO"];

export const getRandomCuisine: (notThisOne?: number ) => number = (notThisOne?: number) => {
    const cuisineNum = Math.floor(Math.random()* MAX_DEX_ID) + 1;

    if(cuisineNum !== notThisOne) return cuisineNum;
    return getRandomCuisine(notThisOne);
}

export const getOptionsForVote = () => {
    const firstId = getRandomCuisine();
    const secondId = getRandomCuisine(firstId);

    return [firstId-1, secondId-1];
}