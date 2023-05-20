import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
// import * as fromAuth from './reducers';
import { authFeatureKey, authReducer } from './reducers';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthEffects } from './auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects])
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
