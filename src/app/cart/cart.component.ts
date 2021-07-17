import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {HttpService} from '../http.service';
import {UserService} from '../user.service';
import {CartDetails} from '../model/cart';
import {OrderRow} from '../model/order-row';
import {OrderRowRequest} from '../model/order-row-request';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;

  isUserLogged: boolean = !!localStorage.getItem('token');

  cartItems: CartDetails;

  orderRowRequest: OrderRowRequest[] = [];

  orderRowRequestSingle: OrderRowRequest = {
    dishId: null,
    orderRowId: null,
    dishQuantity: null
  };

  constructor(private userService: UserService, private httpService: HttpService) { }

  ngOnInit(): void {
    if (this.isUserLogged) {
      this.httpService.getCart().subscribe(response => {
        console.log(response);
        this.cartItems = response;
      }, error => console.log('Error'));
    }
  }

  priceSum(): number {
    let sumObj = 0;
    if (this.cartItems) {
      this.cartItems.orderRowDtos.forEach(object => {
          sumObj += object.dishDto.price;
      });
    }

    return sumObj;
  }

  saveOrder(orderRows: OrderRow[]): void {
    console.log(orderRows);
    this.orderRowRequestSingle.dishId = null;
    this.orderRowRequestSingle.dishQuantity = null;
    this.orderRowRequestSingle.orderRowId = null;

    orderRows.map(item => {
      console.log(item);
      this.orderRowRequestSingle.dishQuantity = 1;
      this.orderRowRequestSingle.dishId = item.dishDto.id;
      this.orderRowRequestSingle.orderRowId = item.orderRowId;

      this.orderRowRequest.push({
        dishQuantity: this.orderRowRequestSingle.dishQuantity,
        dishId: this.orderRowRequestSingle.dishId,
        orderRowId: this.orderRowRequestSingle.orderRowId
      });

      this.orderRowRequestSingle.dishId = null;
      this.orderRowRequestSingle.dishQuantity = null;
      this.orderRowRequestSingle.orderRowId = null;
    });

    console.log('huj');
    console.log(this.orderRowRequest);

    this.httpService.saveOrder(this.orderRowRequest).subscribe(response => {
      window.location.reload();
    }, error => console.log('Cant save order'));
  }

}
