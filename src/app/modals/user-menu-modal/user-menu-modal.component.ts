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

  isUserLogged: boolean = !!localStorage.getItem('token');
  isAdmin = false;

  constructor(public activeModal: NgbActiveModal, public modalEventBus: ModalEventBusService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.checkIsAdmin();
  }

  navigate(targetModal: string): void {
    this.modalEventBus.emitModalRouteEvent(targetModal);
  }

  checkIsAdmin(): void {
    if (localStorage.getItem('token')) {
      this.userService.getUserDetail().toPromise().then(value => {
        if (value.role.includes('ADMIN')) {
          this.isAdmin = true;
        }
      });
    }
  }

  logout(): void {
    this.userService.logout();
    this.activeModal.dismiss('logout');
    window.location.reload();
  }
}
