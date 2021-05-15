import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../../forms/login';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpService} from '../../http.service';

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

  loginErrorMessage = '';

  constructor(public activeModal: NgbActiveModal, private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.httpService.postLoginForm(this.form).subscribe(
      token => {
        localStorage.setItem('token', token.token);
        this.activeModal.dismiss('User logged');
      },
      err => {
        this.loginErrorMessage = HttpService.extractErrorMessage(err);
      }
    );
  }
}
