import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';
import {Address} from '../../forms/address';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-address-form-modal',
  templateUrl: './address-form-modal.component.html',
  styleUrls: ['./address-form-modal.component.css']
})
export class AddressFormModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private httpService: HttpService,
              private router: Router, private userService: UserService) { }

  failureMessage = '';
  successMessage = '';

  form: Address = {
    city: '',
    zip_code: '',
    street: '',
    building_number: '',
    user_email: null,
    status: 'ACTIVE'
};

  ngOnInit(): void {
    this.userService.getUserDetail().subscribe(data => {
      data.addresses.map(userAddress => {
        this.form.city = userAddress.city;
        this.form.zip_code = userAddress.zipCode;
        this.form.building_number = userAddress.buildingNumber;
        this.form.street = userAddress.street;
      });
      this.form.user_email = data.email;
    });
  }

  addAddress(): void {
    this.httpService.saveAddress(this.form).subscribe(response => {
      this.successMessage = 'Udało się dodać adres';
      console.log('Udało się dodać adres');
    }, error => {
      this.failureMessage = 'Nie udało się dodać adresu';
      console.log('Nie udało sie dodać adresu');
    });
  }

}
