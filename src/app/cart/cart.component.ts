import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {HttpService} from '../http.service';
import {UserService} from '../user.service';
import {CartDetails} from '../model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;

  isUserLogged: boolean = !!localStorage.getItem('token');

  cartItems: CartDetails;

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

}
