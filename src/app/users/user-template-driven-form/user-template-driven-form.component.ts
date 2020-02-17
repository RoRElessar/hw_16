import { Component } from '@angular/core';
import { User, UserI } from '../../rest/users.model';
import { UsersService } from '../../rest/users.service';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.css']
})

export class UserTemplateDrivenFormComponent {

  // tslint:disable-next-line:max-line-length
  emailRegExp: RegExp = environment.emailRegExp;
  nameRegExp: RegExp = environment.nameRegExp;
  regions = ['USA', 'Ukraine', 'Italy', 'France', 'Spain'];
  user: UserI = new User({
    id: null,
    first_name: '',
    last_name: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    region: '',
    image: '',
    sex: 'male',
    subscription: true,
    additional_information: ''
  });

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  setRegionValue(regionInput, value) {
    regionInput.value = value;
  }

  onSubmit(event) {
    const newData = new FormData(event.target);
    this.usersService.createUser(newData)
      .subscribe(
        (data) => {
          this.user = new User(data);
          this.router.navigate([`/users/${data.id}`]);
        },
        error => console.log(error)
      );
  }

}
