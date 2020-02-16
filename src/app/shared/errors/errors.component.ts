import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})

export class ErrorsComponent {

  @Input()
  formField;
  @Input()
  regExp;

  constructor() {}

  matchRegExp(input) {
    if (this.regExp !== undefined) {
      return this.regExp.test(input.value);
    } else {
      return true;
    }
  }

  checkLength(input) {
    if (input.name === 'password' || input.name === 'password_confirmation') {
      return input.value.length < 10;
    } else {
      return false;
    }
  }

}
