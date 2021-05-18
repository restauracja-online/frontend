import {Component, OnInit} from '@angular/core';
import {LoginForm} from '../../forms/login';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';

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

  constructor(public activeModal: NgbActiveModal, private userService: UserService,
              private httpService: HttpService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.httpService.postLoginForm(this.form).subscribe(
      token => {
        this.userService.saveTokenInLocalStorage(token.token);
        this.httpService.getUserDetails().subscribe(userDetails => {
          const role = userDetails.role;

          if (role.includes('ADMIN')) {
            this.router.navigateByUrl('/admin');
          } else {
            this.router.navigateByUrl('/home');
          }
        });

        this.activeModal.dismiss('User logged');
      },
      err => {
        this.loginErrorMessage = HttpService.extractErrorMessage(err);
      });
  }
}
