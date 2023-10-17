import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
// import invalidPassword from './invalidPassword';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_\-\+]{8,}$/;
  // - At least one lowercase letter (a-z)
  // - At least one uppercase letter (A-Z)
  // - At least one digit (0-9)
  // - At least one special character from the set [@$!%*?&]
  // - Allows additional special characters [_-+] in the password
  // - The password must be at least 8 characters long

  contactForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      // Validators.minLength(8),
      // invalidPassword
      Validators.pattern(this.passwordRegex),
    ]), // TODO: Create a regex pattern
  });

  // validationRules = {
  //   email:
  //     this.contactForm.get('userEmail')?.invalid &&
  //     (this.contactForm.get('userEmail')?.dirty ||
  //       this.contactForm.get('userEmail')?.touched),
  //   password:
  //     this.contactForm.get('userPassword')?.invalid &&
  //     (this.contactForm.get('userPassword')?.dirty ||
  //       this.contactForm.get('userPassword')?.touched),
  // };

  submitForm() {
    console.log(this.contactForm.valid);
    // if (this.contactForm.userEmail.dirty) {
    //   alert('You changed the email field');
    // }
  }
}
