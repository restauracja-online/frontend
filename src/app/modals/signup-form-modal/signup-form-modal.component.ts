import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SignUp} from '../../forms/sign-up';

@Component({
  selector: 'app-signup-form-modal',
  templateUrl: './signup-form-modal.component.html',
  styleUrls: ['./signup-form-modal.component.css']
})
export class SignupFormModalComponent implements OnInit {

  form: SignUp = {
    email: '',
    password: '',
    repeatedPassword: '',
  };

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
