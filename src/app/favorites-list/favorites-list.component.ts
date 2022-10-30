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
    // When you click back to recipe list from the favorites page, recipes gets reloaded with new data.
    // So the recipes in the favorites do not exist anymore.
    // If you favorite another item again there will be recipes that do not exist.
    // This is a check to make sure there are no undefines
    this.allFavRecipes = this.allFavRecipes.filter(recipe => recipe != undefined)
  }

}
