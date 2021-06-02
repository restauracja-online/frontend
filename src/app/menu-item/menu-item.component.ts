import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../http.service';
import {DishDetails} from '../model/dish-details';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  public dish: DishDetails[];

  constructor(
    public rest: HttpService
  ) {
  }

  ngOnInit(): void {
    this.loadDishes();
  }

  public loadDishes(): void {
    this.rest.getDishes().subscribe(
      (response: DishDetails[]) => {
        this.dish = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }
  }


