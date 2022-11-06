import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StoreState } from './store.reducer';
import { AppState } from './app.state'
import { state } from '@angular/animations';

export const selectStore = (state: AppState) => state.store;

// select all recipe products
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
