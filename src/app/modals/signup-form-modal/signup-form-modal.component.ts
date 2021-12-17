import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SignUp} from '../../forms/sign-up';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-signup-form-modal',
  templateUrl: './signup-form-modal.component.html',
  styleUrls: ['./signup-form-modal.component.css']
})
export class SignupFormModalComponent implements OnInit {

  failureMessage = '';
  successMessage = '';

  form: SignUp = {
    email: '',
    password: '',
    repeatedPassword: '',
  };

  constructor(public activeModal: NgbActiveModal, private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  signup(): void {
    this.failureMessage = '';
    this.successMessage = '';
    this.httpService.postSignUpForm(this.form).subscribe(data => {
        this.successMessage = 'Konto zostalo utworzone, teraz mozesz sie zalogowac';
      },
      error => {
        this.failureMessage = HttpService.extractErrorMessage(error);
      });
  }
}
