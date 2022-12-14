import { Component, OnInit } from '@angular/core';
import { Recipe } from '../food.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectRecipeByID } from '../state/store.selectors';
import { addToFavorites, addComment } from '../state/store.actions';
import { FormControl } from '@angular/forms';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent extends RecipeCardComponent implements OnInit {

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

  recipeComments: any = {};

  selectedRecipe$ = this.store.select(selectRecipeByID(this.ID)).subscribe(val => {
    if (val != undefined) this.recipeData = val;
  });

  constructor(
    private route: ActivatedRoute,
    public appStore: Store<AppState>,
    private router: Router) {
    super(appStore);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    if (this.recipeData.id === 0) this.router.navigate(['/recipe-list']);
  }

  getFormControl(recipeID: string) {
    if (!this.recipeComments[recipeID]) this.recipeComments[recipeID] = new FormControl();
    return this.recipeComments[recipeID]
  }

  addComment(recipeID: string, comment: string) {
    this.appStore.dispatch(addComment({ recipeID, comment }))
  }

}
