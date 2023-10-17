// import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

// export default function invalidPassword(
//   control: AbstractControl
// ): ValidationErrors | null {
//   const passwordRegex =
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_+\\"':.;,^°])/;
//   const value = control.value;

//   if (!value || Validators.pattern(passwordRegex)) { // WRONG
//     return { invalidPassword: true };
//   }
//   return null;
// }
