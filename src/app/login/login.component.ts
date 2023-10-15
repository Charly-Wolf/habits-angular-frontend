import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userEmailControl = new FormControl('');
  userPasswordControl = new FormControl('');

  submitForm() {
    if (this.userEmailControl.dirty) {
      alert('You changed the email field');
    }
  }
}
