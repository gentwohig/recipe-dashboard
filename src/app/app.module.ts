import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

// Services
import { FoodService } from './services/food.service';

// MATERIAL IMPORTS
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

// store
import { storeReducer } from './state/store.reducer';
import { StoreEffects } from './state/store.effects';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    FavoritesListComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
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
    MatToolbarModule,
    MatInputModule,
    StoreModule.forRoot({ store: storeReducer }, {}),
    EffectsModule.forRoot([StoreEffects]),
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
