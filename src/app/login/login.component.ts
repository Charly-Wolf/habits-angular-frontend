import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  contactForm = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
  });

  submitForm() {
    console.log(this.contactForm.valid);
    // if (this.contactForm.userEmail.dirty) {
    //   alert('You changed the email field');
    // }
  }
}
