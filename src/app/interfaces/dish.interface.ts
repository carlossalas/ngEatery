import { Ingredient } from './ingredient.interface';

export interface Dish {
  name: string;
  ingredients: Array<Ingredient>;
}
