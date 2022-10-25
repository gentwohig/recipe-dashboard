import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StoreState } from './store.reducer';
import { AppState } from './app.state'

export const selectStore = (state: AppState) => state.store;

// select all coffee products
export const selectAllRecipes = createSelector(
  selectStore,
  (state) => {
    return state.recipes;
  }
)

// select recipe by ID
export const selectRecipeByID = (id: any) => createSelector(
  selectStore,
  (state: StoreState) => {
    return state.recipes.find(recipe => recipe.id === id)
  }
)
