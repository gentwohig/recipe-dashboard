import { Component, OnInit } from '@angular/core';
import { Recipe } from '../food.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectRecipeByID } from '../state/store.selectors'


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  ID = Number(this.route.snapshot.paramMap.get('id'));

  recipeData: Recipe = {
    id: 0,
    uid: '',
    dish: '',
    description: '',
    ingredient: '',
    measurement: '',
    comments: []

  };

  selectedRecipe$ = this.store.select(selectRecipeByID(this.ID)).subscribe(val => {
    if (val != undefined) this.recipeData = val;
  });

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.recipeData.id === 0) this.router.navigate(['/recipe-list']);
  }

}
