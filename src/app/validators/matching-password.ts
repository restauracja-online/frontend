import {FormGroup, ValidationErrors} from '@angular/forms';

// tslint:disable-next-line:typedef
export function MatchingPassword(password: string, matchingPassword: string) {
  return (formGroup: FormGroup) => {
    const pswd = formGroup.controls[password];
    const matchingPswd = formGroup.controls[matchingPassword];

    if (!pswd || !matchingPswd) {
      return null;
    }
    if (matchingPswd.errors && !matchingPswd.errors.matchPassword) {
      return null;
    }

    if (pswd.value !== matchingPswd.value) {
      matchingPswd.setErrors({matchPassword: true});
    } else {
      matchingPswd.setErrors(null);
    }
  };
}
