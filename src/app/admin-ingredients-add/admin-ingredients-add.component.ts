import { Component, OnInit } from '@angular/core';
import {IngredientsForm} from '../forms/ingredients';
import {HttpService} from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-ingredients-view',
  templateUrl: './admin-ingredients-add.component.html',
  styleUrls: ['./admin-ingredients-add.component.css']
})
export class AdminIngredientsAddComponent implements OnInit {

  header: string;
  ingredientId: number;

  form: IngredientsForm = {
    ing_id: null,
    ing_name: '',
    ing_price: null
  };

  ingredientsErrorMessage = '';
  failureMessage = '';
  successMessage = '';

  constructor(private httpService: HttpService, private router: Router, private routeActivate: ActivatedRoute) { }

  ngOnInit(): void {
    this.ingredientId = +this.routeActivate.snapshot.paramMap.get('id');
    this.header = !this.ingredientId ? 'Dodaj składnik' : 'Edytuj składnik';

    if (this.ingredientId) {
      this.httpService.getIngredient(this.ingredientId).subscribe(data => {
        console.log(data.name);
        this.form.ing_name = data.name;
        this.form.ing_price = data.price;
      }, error => {
        this.header = 'Dodaj składnik';
        this.ingredientId = null;
        this.router.navigate(['/admin/ingredients/add']);
      });
    }

  }

  save(): void {
    this.failureMessage = '';
    this.successMessage = '';
    this.httpService.postIngredients(this.form).subscribe(data => {
      this.successMessage = 'Składnik został dodany';
      this.router.navigate(['/admin/ingredients']);
    },
    error => {
      this.failureMessage = 'Nie udało sie dodać składnika';
    });
  }

  edit(): void {
    this.failureMessage = '';
    this.successMessage = '';
    this.form.ing_id = this.ingredientId;
    this.httpService.putIngredients(this.form).subscribe(data => {
        this.successMessage = 'Składnik został edytowany';
        this.router.navigate(['/admin/ingredients']);
      },
      error => {
        this.failureMessage = 'Nie udało sie dodać składnika';
      });
  }

}
