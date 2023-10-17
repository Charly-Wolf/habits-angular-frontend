import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  contactForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
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
