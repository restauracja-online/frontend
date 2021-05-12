import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalEventBusService} from '../../modal-event-bus.service';

@Component({
  selector: 'app-user-menu-modal',
  templateUrl: './user-menu-modal.component.html',
  styleUrls: ['./user-menu-modal.component.css']
})
export class UserMenuModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, public modalEventBus: ModalEventBusService) {
  }

  ngOnInit(): void {
  }

  navigate(targetModal: string): void {
    this.modalEventBus.emitModalRouteEvent(targetModal);
  }

}
