import { createAction, props } from "@ngrx/store";
import { Recipe } from "../food.model";

// load recipes
export const loadRecipes = createAction(
  "[Recipes] Load Recipes"
);

// load recipes success
export const loadRecipesSuccess = createAction(
  "[Recipes] Load Recipes Success",
  props<{ recipes: Recipe[] }>()
);

// load recipes failure
export const loadRecipesFailure = createAction(
  "[Recipes] Load Recipes Error",
  props<{ error: string }>()
);

// type recipe = { recipeID: string };
// add recipe to favourites
export const addToFavorites = createAction(
  "[favRecipes] Added Recipe to Favorites",
  props<{recipeID: string}>()
);

// remove recipe to favourites

// add comment to recipe
