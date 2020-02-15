import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../rest/users.service';
import { User, UserI } from '../../rest/users.model';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  public userId: string;
  user: UserI;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(this.userId)
      .subscribe(
        data => this.user = new User(data),
        error => console.log(error)
      );

  }

  capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

}
