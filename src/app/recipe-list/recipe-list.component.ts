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
  // comment = new FormControl('');

  recipeComments:any = {};

  allRecipes$ = this.store.select(selectAllRecipes)

  constructor(private foodService: FoodService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(loadRecipes())
  }

  addToFavorites(recipeID: string) {
    this.store.dispatch(addToFavorites({recipeID}))
    // this.store.subscribe(state => console.log(state.store.favRecipes))
  }

  getFormConrole(recipeID: string) {
    if (!this.recipeComments[recipeID]) this.recipeComments[recipeID] = new FormControl();
    return this.recipeComments[recipeID]
  }
  addCommentInputField() {
    // this.recipeComments.push(new FormControl(''));
    // this.store.dispatch(addComment({comment}))
    // this.store.subscribe((state) => {

    //   console.log(state.stoe.recipes.)
    // })
  }

  addComment(recipeID: string, comment: string) {
    this.store.dispatch(addComment({recipeID, comment}))
    this.store.subscribe(state => {
      state.store.recipes.filter((recipe) => {
        // if(recipe.uid === recipeID) console.log(recipe)
      })
    })
    console.log(this.recipeComments)
  }

}
