import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Recipe } from '../food.model';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {

  allFavRecipes: Recipe[] = []
  status: boolean = true;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.allFavRecipes = state.store.favRecipes.map((favRecipe) => {
        let foundFavRecipe = state.store.recipes.find((recipe) => {
          return recipe.uid == favRecipe
        })
        return foundFavRecipe as Recipe
      })
    })
    console.log(this.allFavRecipes)
  }

}
