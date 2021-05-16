import {Component, OnInit} from '@angular/core';
import {UserDetails} from '../model/user-details';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  userDetails: UserDetails;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserDetail().subscribe(details => {
      this.userDetails = details;
    });
  }

}
