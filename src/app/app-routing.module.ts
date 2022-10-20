import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

const routes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'favorites-list', component: FavoritesListComponent },
  { path: '', redirectTo: '/recipe-list', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
