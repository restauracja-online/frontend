import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalEventBusService} from '../../modal-event-bus.service';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-menu-modal',
  templateUrl: './user-menu-modal.component.html',
  styleUrls: ['./user-menu-modal.component.css']
})
export class UserMenuModalComponent implements OnInit {
  isUserLogged = false;

  constructor(public activeModal: NgbActiveModal, public modalEventBus: ModalEventBusService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.isUserLogged = this.userService.isUserLogged();
  }

  navigate(targetModal: string): void {
    this.modalEventBus.emitModalRouteEvent(targetModal);
  }

}
