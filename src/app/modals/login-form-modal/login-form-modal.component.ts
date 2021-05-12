import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../../forms/login';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-form-modal',
  templateUrl: './login-form-modal.component.html',
  styleUrls: ['./login-form-modal.component.css']
})
export class LoginFormModalComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: ''
  };

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
