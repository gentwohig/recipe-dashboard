import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../food.model';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoodRecipes(): Observable<Recipe[]> {
    const sizeOfData = 50;
    const url = `https://random-data-api.com/api/food/random_food?size=${sizeOfData}`;
    return this.http.get<Recipe[]>(url);

  }
}
