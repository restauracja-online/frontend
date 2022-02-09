import {Directive, Input} from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

import {MatchingPassword} from '../validators/matching-password';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[matchPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MatchingPasswordValidatorDirective,
    multi: true
  }]
})
export class MatchingPasswordValidatorDirective implements Validator {

  @Input('matchPassword')
  matchPasswords: string[] = [];

  constructor() {
  }

  validate(formGroup: FormGroup): ValidationErrors | null {
    return MatchingPassword(this.matchPasswords[0], this.matchPasswords[1])(formGroup);
  }

}
