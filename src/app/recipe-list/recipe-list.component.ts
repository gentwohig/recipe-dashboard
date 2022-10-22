import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Recipe } from '../food.model';
import { Store } from '@ngrx/store';
import { selectAllRecipes } from '../state/store.selectors';
import { loadRecipes, addToFavorites, addComment } from '../state/store.actions';
import { FormArray, FormControl } from '@angular/forms';
import { AppState } from '../state/app.state'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []

  allRecipes$ = this.store.select(selectAllRecipes)

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadRecipes())
  }



}
