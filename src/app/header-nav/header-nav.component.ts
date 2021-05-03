import { Component, OnInit } from '@angular/core';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  faUtensils = faUtensils;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
