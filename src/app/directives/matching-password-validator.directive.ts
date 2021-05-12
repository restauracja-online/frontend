import {Directive} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appMatchingPasswordValidator]'
})
// todo implementation
export class MatchingPasswordValidatorDirective implements Validator {

  constructor() {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return undefined;
  }

}
