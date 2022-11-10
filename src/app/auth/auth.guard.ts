import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable,tap } from "rxjs";
import { Store, select } from "@ngrx/store";
import { selectIsLoggedIn } from "./auth.selectors";
import { AuthState } from "./reducers";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AuthState>,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        select(selectIsLoggedIn),
        tap(loggedIn => {
          if (!loggedIn) {
            this.router.navigateByUrl('/login');
          }
        })
      )
  }
}
