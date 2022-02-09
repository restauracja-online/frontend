import {Component, OnInit} from '@angular/core';
import {faUtensils, faBars} from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserMenuModalComponent} from '../modals/user-menu-modal/user-menu-modal.component';
import {LoginFormModalComponent} from '../modals/login-form-modal/login-form-modal.component';
import {ModalEventBusService} from '../modal-event-bus.service';
import {SignupFormModalComponent} from '../modals/signup-form-modal/signup-form-modal.component';
import {UserService} from '../user.service';
import {AddressFormModalComponent} from '../modals/address-form-modal/address-form-modal.component';
import {OrdersComponent} from '../modals/orders/orders.component';

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
  userAddress = '';

  constructor(private modalService: NgbModal, private modalEventBus: ModalEventBusService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.onModalChange();
    this.getUserAddress();
  }

  openUserMenuModal(): void {
    this.modalService.open(UserMenuModalComponent);
  }

  getUserAddress(): void {
    this.userService.userLoggedEventBus().subscribe(userLoggedEvent => {
      if (userLoggedEvent) {
        this.userService.getUserDetail().subscribe(userDetails => {
          console.log('details' + userDetails);
          const address = userDetails.addresses[0];
          this.userAddress = !!address ? `${address.city}, ${address.street} ${address.buildingNumber}` : '';
        });
      } else {
        this.userAddress = '';
      }
    });

  }

  openLoginFormModal(): void {
    this.modalService.open(LoginFormModalComponent);
  }

  openSignUpFormModal(): void {
    this.modalService.open(SignupFormModalComponent);
  }

  openAddressModal(): void {
    this.modalService.open(AddressFormModalComponent);
  }

  openOrderModal(): void {
    this.modalService.open(OrdersComponent);
  }

  onModalChange(): void {
    this.modalEventBus.onModalRouteChange(target => this.openModalByName(target));
  }

  openModalByName(targetModal: string): void {
    this.modalService.dismissAll('Change modal event occurred');
    switch (targetModal) {
      case 'login':
        return this.openLoginFormModal();
      case 'sign-up':
        return this.openSignUpFormModal();
      case 'address':
        return this.openAddressModal();
      case 'orders':
        return this.openOrderModal();
      default:
        throw new Error('Invalid target modal : ' + targetModal);
    }
  }

}
