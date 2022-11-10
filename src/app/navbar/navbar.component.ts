import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectIsLoggedIn, selectIsLoggedOut } from '../auth/auth.selectors';
import { logout } from '../auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  isLoggedOut$: Observable<boolean> | undefined;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn)
    this.isLoggedOut$ = this.store.select(selectIsLoggedOut)
    this.store.subscribe((state: any) => console.log(state["auth"]))
  }

  logout() {
    this.store.dispatch(logout());
  }

}
