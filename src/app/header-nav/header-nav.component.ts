import {Component, OnInit} from '@angular/core';
import {faUtensils, faBars} from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserMenuModalComponent} from '../modals/user-menu-modal/user-menu-modal.component';
import {LoginFormModalComponent} from '../modals/login-form-modal/login-form-modal.component';
import {ModalEventBusService} from '../modal-event-bus.service';

/*
* Probably it's good to extract modal logic to separate service or even better use routing to navigate between modals.
* */
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  faUtensils = faUtensils;
  faBars = faBars;

  constructor(private modalService: NgbModal, private modalEventBus: ModalEventBusService) {
  }

  ngOnInit(): void {
    this.onModalChange();
  }

  openUserMenuModal(): void {
    this.modalService.open(UserMenuModalComponent);
  }

  openLoginFormModal(): void {
    this.modalService.open(LoginFormModalComponent);
  }

  onModalChange(): void {
    this.modalEventBus.onModalRouteChange(target => this.openModalByName(target));
  }

  openModalByName(targetModal: string): void {
    this.modalService.dismissAll('Change modal event occurred');
    switch (targetModal) {
      case 'login':
        return this.openLoginFormModal();
      default:
        throw new Error('Invalid target modal : ' + targetModal);
    }
  }

}
