import { createSelector, createFeatureSelector } from '@ngrx/store';
import { state } from '@angular/animations';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
)

export const selectIsLoggedOut = createSelector(
  selectIsLoggedIn,
  (loggedIn) => !loggedIn
)
