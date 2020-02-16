import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsersService } from '../../rest/users.service';
import { User, UserI } from '../../rest/users.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})

export class UserReactiveFormComponent {

  // tslint:disable-next-line:max-line-length
  emailRegExp: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  nameRegExp: RegExp = new RegExp(/^[0-9a-zA-Z]+$/);
  regions = ['USA', 'Ukraine', 'Italy', 'France', 'Spain'];
  userForm: FormGroup;
  user: UserI;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      // tslint:disable-next-line:variable-name
      first_name: ['', Validators.required],
      // tslint:disable-next-line:variable-name
      last_name: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      // tslint:disable-next-line:variable-name
      password_confirmation: ['', Validators.required],
      region: ['', Validators.required],
      sex: ['male'],
      // tslint:disable-next-line:variable-name
      additional_information: [''],
      subscription: [true],
      image: [null]
    });
  }

  setRegionValue(value) {
    this.userForm.controls.region.setValue(value);
  }

  onSubmit() {
    const formData = new FormData();
    const formValue = this.userForm.value;
    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    console.log(formData.get('image'));
    this.usersService.createUser(formData)
      .subscribe(
        (data) => {
          this.user = new User(data);
          this.router.navigate([`/users/${data.id}`]);
        },
        error => console.log(error)
      );
  }

}
