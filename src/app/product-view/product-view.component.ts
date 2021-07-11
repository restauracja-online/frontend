import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {DishDetails} from '../model/dish-details';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  dishesMain: DishDetails[];

  ngOnInit(): void {
    this.httpService.getDishesMain().subscribe(response => {
      this.dishesMain = response;
    });
  }


}
