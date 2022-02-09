import {Component, OnInit, ViewChild} from '@angular/core';
import {UserDetails} from '../model/user-details';
import {UserService} from '../user.service';
import {ProductViewComponent} from '../product-view/product-view.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  userDetails: UserDetails;

  constructor(private userService: UserService) {
  }

  isUserLogged: boolean = !!localStorage.getItem('token');

  // @ViewChild('appHeader') appHeader: ProductViewComponent;

  ngOnInit(): void {
    this.userService.getUserDetail().subscribe(details => {
      this.userDetails = details;
    }, error => console.log('user nie zalogowany'));
  }

}
