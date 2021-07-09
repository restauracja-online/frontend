import {IngredientsDetails} from './ingredients-details';

export interface DishDetails {
  id: number;
  name: string;
  description: string;
  price: number;
  imgURL: string;
  ingredients: IngredientsDetails[];
}
