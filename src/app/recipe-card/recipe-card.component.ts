import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../food.model';
import { addToFavorites, addComment } from '../state/store.actions';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { AppState } from '../state/app.state'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe = {
    id: 0,
    uid: '',
    dish: '',
    description: '',
    ingredient: '',
    measurement: '',
    comments: []
  }

  @Input() favoriteStatus: boolean = false;
  @Output() favoriteStatusChange = new EventEmitter<boolean>();

  recipeComments: any = {};

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }

  addToFavorites(recipeID: string) {
    this.store.dispatch(addToFavorites({ recipeID }));
    this.favoriteStatus = !this.favoriteStatus;
    this.favoriteStatusChange.emit(this.favoriteStatus)
  }

  getFormConrol(recipeID: string) {
    if (!this.recipeComments[recipeID]) this.recipeComments[recipeID] = new FormControl();
    return this.recipeComments[recipeID]
  }

  addComment(recipeID: string, comment: string) {
    this.store.dispatch(addComment({ recipeID, comment }))
    this.store.subscribe(state => {
      state.store.recipes.filter((recipe) => {
        // if(recipe.uid === recipeID) console.log(recipe)
      })
    })
    console.log(this.recipeComments)
  }

}
