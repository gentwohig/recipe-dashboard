import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    // StoreModule.forRoot({state: authReducer})
    // StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers, authReducer),
    // StoreModule.forFeature({ store: authReducer }),
  ]
})
// export class AuthModule { }
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    }
  }
}
