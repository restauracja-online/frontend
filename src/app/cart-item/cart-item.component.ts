import {Component, Input, OnInit} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {OrderRow} from '../model/order-row';
import {CartDetails} from '../model/cart';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  faTimes = faTimes;

  // tslint:disable-next-line:no-input-rename
  @Input('MyCount') orderRow: OrderRow;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  removeOrderRow(orderRowId): void {
    this.httpService.removeOrderRow(orderRowId).subscribe(response => {
      console.log('OrderRow remover');
      window.location.reload();
    }, error => console.log('Error while removing order row'));
  }

}
