import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DishForm} from '../forms/dish';
import {IngredientsDetails} from '../model/ingredients-details';
import {IngredientsForm} from '../forms/ingredients';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {

  header: string;
  dishId: number;

  failureMessage = '';
  successMessage = '';

  ingredients: IngredientsDetails[];

  ingredientsForm: IngredientsForm[];

  editIngredientsForm: IngredientsForm[];

  form: DishForm = {
    dish_id: null,
    dish_name: '',
    dish_desc: '',
    dish_price: null,
    dish_img: '',
    dish_ing: null
  };

  constructor(private httpService: HttpService, private router: Router, private routeActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.dishId = +this.routeActivate.snapshot.paramMap.get('id');
    this.header = !this.dishId ? 'Dodaj danie' : 'Edytuj danie';

    if (this.dishId) {
      this.httpService.getDish(this.dishId).subscribe(response => {
        this.form.dish_id = response.id;
        this.form.dish_name = response.name;
        this.form.dish_desc = response.description;
        this.form.dish_price = response.price;
        this.form.dish_img = response.imgURL;
        this.editIngredientsForm = response.ingredients.map(ingredient => {
          return { ing_id: ingredient.id, ing_name: ingredient.name, ing_price: ingredient.price};
        });
        this.form.dish_ing = this.editIngredientsForm;
      });
    }
    this.httpService.getIngredients().subscribe(response => {
        this.ingredientsForm = response.map(ingredient => {
          return { ing_id: ingredient.id, ing_name: ingredient.name, ing_price: ingredient.price};
        });
      });
  }

  edit(): void {
    this.failureMessage = '';
    this.successMessage = '';
    this.httpService.putDish(this.form).subscribe(response => {
      console.log('Danie edytowano pomyślnie');
      this.successMessage = 'Danie edytowano pomyślnie';
      this.router.navigate(['/admin/product']);
    }, error =>  {
      console.log('Nie udało się edytować produktu');
      this.failureMessage = 'Nie udało się edytować produktu';
    });
  }

  save(): void {
    this.failureMessage = '';
    this.successMessage = '';
    console.log(this.form);
    this.httpService.postDishes(this.form).subscribe(response => {
      this.successMessage = 'Danie zostało dodane';
      this.router.navigate(['/admin/product']);
    }, error => {
      this.failureMessage = 'Nie można dodać dania. Upewnij sie że uzupełniłeś wszystkie pola';
    });
  }

}
