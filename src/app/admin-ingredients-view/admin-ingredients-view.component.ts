import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {IngredientsDetails} from '../model/ingredients-details';

@Component({
  selector: 'app-admin-ingredients-view',
  templateUrl: './admin-ingredients-view.component.html',
  styleUrls: ['./admin-ingredients-view.component.css']
})
export class AdminIngredientsViewComponent implements OnInit {

  ingredients: IngredientsDetails[];

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.httpService.getIngredients().subscribe(response => {
      this.ingredients = response;
      console.log(response);
    }, error => console.log('error getting ingredients'));
  }

  redirectToAddIngredient(): void {
    this.router.navigate(['/admin/ingredients/add']);
  }

  editIngredient(ingredientId: number): void {
    this.router.navigate(['/admin/ingredients/add', { id: ingredientId}]);
  }

  removeIngredient(ingredientId: number): void {
    this.httpService.removeIngredient(ingredientId).subscribe(data => {
      console.log('Ingredient removed');
      window.location.reload();
    });
  }
}
