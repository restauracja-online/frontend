import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {DishDetails} from '../model/dish-details';

@Component({
  selector: 'app-admin-product-view',
  templateUrl: './admin-product-view.component.html',
  styleUrls: ['./admin-product-view.component.css']
})
export class AdminProductViewComponent implements OnInit {

  dishes: DishDetails[];

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.getDishes();
  }

  getDishes(): void {
    this.httpService.getDishes().subscribe(response => {
      console.log(response);
      this.dishes = response;
    }, error => console.log('Nie można pobrać listy dań'));
  }

  editDish(dishId: number): void {
    this.router.navigate(['/admin/product/add', { id: dishId}]);
  }

  removeDish(dishId: number): void {
    this.httpService.removeDish(dishId).subscribe(response => {
      console.log('usunieto danie');
      window.location.reload();
    }, error => console.log('nie mozna usunac dania'));
  }

  redirectToAddDish(): void {
    this.router.navigate(['/admin/product/add']);
  }

}
