import { PipeTransform, Pipe } from '@angular/core';
import { Recipe } from '../food.model';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {

  transform(items: Recipe[] | null, options: any, callback: (item: Recipe, options: any) => boolean): any {
    if (!items || !callback) {
      return items;
    }
    return items.filter(item => callback(item, options));
  }
}
