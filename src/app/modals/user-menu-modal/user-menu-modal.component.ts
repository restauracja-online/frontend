import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-menu-modal',
  templateUrl: './user-menu-modal.component.html',
  styleUrls: ['./user-menu-modal.component.css']
})
export class UserMenuModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
