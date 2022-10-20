import { createReducer, on } from "@ngrx/store";
import { loadRecipes, loadRecipesSuccess, loadRecipesFailure, addToFavorites } from "./store.actions";
import { Recipe } from "../food.model";

export interface StoreState {
  recipes: Recipe[],
  favRecipes: string[],
  error: string
}

export const initialState: StoreState = {
  recipes: [],
  favRecipes: [],
  error: '',
}

export const storeReducer = createReducer(
  initialState,
  on(loadRecipes, (state) => ({ ...state })),
  on(loadRecipesSuccess, (state, { recipes }) => ({ ...state, recipes })),
  on(loadRecipesFailure, (state, { error }) => ({ ...state, error })),
  on(addToFavorites, (state, { recipeID }) => {
    return { ...state, favRecipes: [...state.favRecipes, recipeID] };
  })
);
