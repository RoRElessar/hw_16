import { Component, OnInit } from '@angular/core';
import { User, UserI } from '../rest/users.model';
import { UsersService } from '../rest/users.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  spinner = true;
  users: UserI[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(
        (data) => {
          this.users = data.map(i => new User(i));
          this.spinner = false;
        },
        error => console.log(error)
      );
  }

}
