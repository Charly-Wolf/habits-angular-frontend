import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import invalidPassword from './invalidPassword';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_\-\+]{8,}$/;

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
  constructor(private router: Router) {}

  login() {
    // TODO: Add propper authorization (also in the backend)
    this.router.navigate(['dashboard']);
  }
}
