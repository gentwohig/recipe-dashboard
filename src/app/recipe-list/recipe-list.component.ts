import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Recipe } from '../food.model';
import { Store } from '@ngrx/store';
import { selectAllRecipes } from '../state/store.selectors';
import { loadRecipes, addToFavorites } from '../state/store.actions';
import { FormControl } from '@angular/forms';
import { AppState } from '../state/app.state'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  comment = new FormControl('');

  allRecipes$ = this.store.select(selectAllRecipes)

  constructor(private foodService: FoodService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadRecipes())
  }

  addToFavorites(recipeID: string) {
    this.store.dispatch(addToFavorites({recipeID}))
    // this.store.subscribe(state => console.log(state.store.favRecipes))
  }
}
