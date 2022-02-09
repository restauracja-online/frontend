import {DishDetails} from './dish-details';

export interface OrderRow {
  orderRowId: number;
  dishDto: DishDetails;
  dishQuantity: number;
}
