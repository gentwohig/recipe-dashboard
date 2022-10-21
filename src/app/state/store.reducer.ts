import { createReducer, on } from "@ngrx/store";
import { loadRecipes, loadRecipesSuccess, loadRecipesFailure, addToFavorites, addComment } from "./store.actions";
import { Recipe } from "../food.model";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";

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
  on(loadRecipesSuccess, (state, { recipes }) => ({ ...state, recipes: recipes.map((recipe) => ({ ...recipe, comments: []})) })),
  on(loadRecipesFailure, (state, { error }) => ({ ...state, error })),
  on(addToFavorites, (state, { recipeID }) => {
    return { ...state, favRecipes: [...state.favRecipes, recipeID] };
  }),
  on(addComment, (state, { recipeID, comment }) => {
    // let foundRecipe = state.recipes.findIndex(recipe => recipe.uid === recipeID)
    // let recipes = {...state.recipes}
    // let recipesComments = recipes[foundRecipe].comments
    // ------------------------------------------------------------------------------
    // recipes[foundRecipe].comments = [...recipes[foundRecipe].comments, comment]
    // recipes[foundRecipe].comments.push(comment)
    // state.recipes.filter((recipe) => {
    //   if(recipe.uid === recipeID) {
    //     console.log(recipe.comments)
    //     recipe.comments = [...recipe.comments]
    //   }
    //   return recipe
    // })
    // ------------------------------------------------------------------------------
    let newRecipes = state.recipes.map((recipe => {
      return recipe.uid === recipeID ? ({...recipe, comments: [...recipe.comments, comment ]}) : recipe
    }))

    return { ...state, recipes: newRecipes }
  })
);
