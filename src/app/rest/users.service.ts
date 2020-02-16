import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable()
export class UsersService {
  baseUrl = 'https://create-users-api.herokuapp.com/users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + userId);
  }

  createUser(formData: FormData) {
    return this.http.post<User>(this.baseUrl, formData);
  }
}
