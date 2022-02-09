import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css']
})
export class FoodCategoriesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toBurgers() {
    document.getElementById('Burgery').scrollIntoView({behavior: 'smooth'});
  }

  // tslint:disable-next-line:typedef
  toMenu() {
    document.getElementById('Zestawy').scrollIntoView({behavior: 'smooth'});
  }

  // tslint:disable-next-line:typedef
  toKebab() {
    document.getElementById('Kebab').scrollIntoView({behavior: 'smooth'});
  }
}
