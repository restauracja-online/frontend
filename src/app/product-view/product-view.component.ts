import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {DishDetails} from '../model/dish-details';
import {Subscription} from 'rxjs';
import {OrderRow} from '../model/order-row';
import {OrderRowRequest} from '../model/order-row-request';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  dishesMain: DishDetails[];
  orderRow: OrderRowRequest = {
    dishId: null,
    dishQuantity: null
  };

  ngOnInit(): void {
    this.httpService.getDishesMain().subscribe(response => {
      this.dishesMain = response;
    });
  }

  addToCart(dishId: any): void {

    this.orderRow.dishId = null;
    this.orderRow.dishQuantity = null;

    this.orderRow.dishId = dishId;
    this.orderRow.dishQuantity = 1;

    console.log(this.orderRow);

    this.httpService.addToCart(this.orderRow).subscribe(response => {
      console.log('Dish added to cart');
      window.location.reload();
    }, error => console.log('Cant add dish to cart'));
  }

}
