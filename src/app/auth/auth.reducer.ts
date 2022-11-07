import { createReducer, on } from "@ngrx/store";
import { login } from "./auth.actions";
import { User } from "./model/user.model";

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: {
    id: '0',
    email:'test@email.com',
  }
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state) => ({ ...state, user: state.user })),
);
