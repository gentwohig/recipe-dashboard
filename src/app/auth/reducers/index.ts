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
import { login } from '../auth.actions';

export const authFeatureKey = 'auth';

// export interface State {

// }

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: {
    id: '0',
    email: 'test@email.com',
  }
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, {user}) => {
    console.log(state);
    return {...state, user}
  }),
);

// export const reducers: ActionReducerMap<State> = {

// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
