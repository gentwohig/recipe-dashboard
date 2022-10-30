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
  // @Input() recipeImage: string = '';

  @Input() favoriteStatus: boolean = false;
  @Output() favoriteStatusChange = new EventEmitter<boolean>();

  recipeComments: any = {};

  cookingTime: number = 10;
  recipeRating: number = 4.5;

  recipeImages = ['/assets/American pancake_Isometric.png',
    '/assets/Fast food_Isometric (1).png',
    '/assets/Fast food_Isometric.png',
    '/assets/Meal_Isometric (1).png',
    '/assets/Meal_Isometric.png',
    '/assets/Sushi roll_Isometric.png',
    '/assets/Toast_Isometric.png']


  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.cookingTime = Math.floor((Math.random() * 120) + 10);
    let randomRating = ((Math.random() * 5) + 1)
    this.recipeRating = Math.round(randomRating * 10) / 10;
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
  }

}
