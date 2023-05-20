import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { FoodService } from '../services/food.service';
import { loadRecipes, loadRecipesSuccess, loadRecipesFailure } from "./store.actions";

@Injectable()
export class StoreEffects {
  // loadRecipes$ = createEffect(() => this.actions$.pipe(
  //   ofType(loadRecipes),
  //   mergeMap(() =>
  //     from(this.FoodService.getFoodRecipes()).pipe(
  //       map((recipes: any) => loadRecipesSuccess({ recipes })),
  //       catchError((error) => of(loadRecipesFailure({ error: error })))
  //     )
  //   )

  // ));
  loadRecipes$ = createEffect(() => this.actions$.pipe(
    ofType(loadRecipes),
    mergeMap(() =>
      from(this.FoodService.getFoodRecipes()).pipe(
        map((recipes: any) => loadRecipesSuccess({ recipes })),
        catchError((error) => of(loadRecipesFailure({ error: error })))
      )
    )

  ));
  constructor(
    private actions$: Actions,
    private FoodService: FoodService,
  ) { }
}
