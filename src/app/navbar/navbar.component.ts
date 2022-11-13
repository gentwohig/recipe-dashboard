import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectIsLoggedIn, selectIsLoggedOut } from '../auth/auth.selectors';
import { login, logout } from '../auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;


  constructor(private store: Store) { }

  ngOnInit() {

    const userProfile = localStorage.getItem("user");

    if (userProfile) {
      this.store.dispatch(login({ user: JSON.parse(userProfile) }));
    }

    this.isLoggedIn$ = this.store
      .pipe(
        select(selectIsLoggedIn)
      )

    this.isLoggedOut$ = this.store
      .pipe(
        select(selectIsLoggedOut)
      )
    // this.store.subscribe((state: any) => console.log(state["auth"]))
  }

  logout() {
    this.store.dispatch(logout());
  }

  toggleDrawer(drawer: any) {
    drawer.toggle()
  }

}
