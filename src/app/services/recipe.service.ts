import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Recipe } from '../food.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get('/api/recipes')
      .pipe(
        map((res: any) => res['payload'])
      );
  }
}
