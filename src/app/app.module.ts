import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// MATERIAL IMPORTS
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { FoodService } from './services/food.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

// store
import { storeReducer } from './state/store.reducer';
import { StoreEffects } from './state/store.effects';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    FavoritesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ store: storeReducer }, {}),
    EffectsModule.forRoot([StoreEffects]),
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
