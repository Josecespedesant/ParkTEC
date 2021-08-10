import { RecipeDB } from "../infrastructure/RecipeDB.js";

export const searchRecipes = (randomResult = false, limit = 2) => {
    let result = [];
    if (randomResult) {
        for (let i = limit; i > 0; i--) {
            result.push(RecipeDB[Math.floor(Math.random() * RecipeDB.length)])
        }
    } else {
        result = RecipeDB.slice(0, limit);
    }
    return result;
};