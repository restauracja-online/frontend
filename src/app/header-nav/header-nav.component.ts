import { Component, OnInit } from '@angular/core';
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserMenuModalComponent} from '../modals/user-menu-modal/user-menu-modal.component';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  faUtensils = faUtensils;
  faBars = faBars;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openUserMenuModal(): void {
    this.modalService.open(UserMenuModalComponent);
  }

}
