import {IngredientsForm} from './ingredients';

export interface DishForm {
  dish_id: number;
  dish_name: string;
  dish_desc: string;
  dish_price: number;
  dish_img: string;
  dish_ing: IngredientsForm[];
}
