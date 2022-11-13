import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  on,
  createReducer
} from '@ngrx/store';
// import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { login, logout } from '../auth.actions';
import { state } from '@angular/animations';

export const authFeatureKey = 'auth';

// export interface State {

// }

export interface AuthState {
  user: User | undefined
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, {user}) => {
    return {...state, user}
  }),
  on(logout, state => ({...state, user: undefined}))
);

// export const reducers: ActionReducerMap<State> = {

// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
