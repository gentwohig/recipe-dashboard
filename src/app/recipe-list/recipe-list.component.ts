import { Component, OnInit } from '@angular/core';
import { Recipe } from '../food.model';
import { Store } from '@ngrx/store';
import { selectAllRecipes } from '../state/store.selectors';
import { loadRecipes } from '../state/store.actions';
import { AppState } from '../state/app.state'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []

  allRecipes$ = this.store.select(selectAllRecipes)

  display: boolean = true;
  searchParam = "";

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadRecipes());
  }

  setSearch(value:string) {
    this.searchParam = value.toLowerCase();
  }

  searchForARecipe(recipe: Recipe, searchParam: string) {
    if(!searchParam) return true
    return recipe.dish.toLowerCase().includes(searchParam)
  }
}
