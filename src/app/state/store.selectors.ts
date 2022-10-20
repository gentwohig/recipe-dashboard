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
