import {OrderItem} from './order-item';

export interface Order {
  price: number;
  orderItem: OrderItem[];
}
