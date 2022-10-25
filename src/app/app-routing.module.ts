import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'favorites-list', component: FavoritesListComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: '', redirectTo: '/recipe-list', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
