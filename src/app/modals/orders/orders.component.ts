import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalEventBusService} from '../../modal-event-bus.service';
import {UserService} from '../../user.service';
import {Order} from '../../model/order';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(public activeModal: NgbActiveModal, public modalEventBus: ModalEventBusService, private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getOrder().subscribe(response => {
      this.orders = response;
    }, error => console.log('Cant get orders'));
  }

}
