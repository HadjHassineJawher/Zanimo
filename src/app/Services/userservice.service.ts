import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

  SelectedUser: Users;
  User: Users[];

  readonly baseURL = 'http://localhost:3030/Users';

  constructor(private http: HttpClient) { }

  // Add new User
  postUser(User: Users) {
    return this.http.post(this.baseURL, User)
  }

  //get all Users
  getUsers() {
    return this.http.get(this.baseURL)
  }

  //For Material Table 
  getuserob(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseURL)
  }

  //User Modification
  putuser(User: Users) {
    return this.http.patch(this.baseURL + `/${User._id}`, User)
  }
  // All User Information

  getoneuser(SelectedUsers) {
    return this.http.get(this.baseURL + `/${SelectedUsers._id}`)
  }

  deleteUser(_id: String) {
    return this.http.delete(this.baseURL + `/${_id}`)
  }

}
