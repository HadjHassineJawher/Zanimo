import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users/users';
import { Posts } from '../models/Users/users';


@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

  SelectedUser: Users;
  Selectedpost: Posts[];
  User: Users[];

  private readonly baseURL = 'http://localhost:3030/Users';

  constructor(private http: HttpClient) { }

  //Add new User
  postUser(User: Users) {
    return this.http.post(this.baseURL, User)
  }

  //get all Users
  getUsers() {
    return this.http.get(this.baseURL)
  }

  /*
    //For Material Table 
    getuserob(): Observable<Users[]> {
      return this.http.get<Users[]>(this.baseURL)
    }
  */

  //User Modification
  putuser(User: Users) {
    return this.http.patch(this.baseURL + `/${User._id}`, User)
  }

  // one User Information
  getoneuser(SelectedUsers) {
    return this.http.get(this.baseURL + `/${SelectedUsers._id}`)
  }

  // Delete à User
  deleteUser(_id: String) {
    return this.http.delete(this.baseURL + `/OneUser/${_id}`)
  }

  // Ban a User
  BanUser(SelectedUser) {
    return this.http.patch(this.baseURL + `/Ban/${SelectedUser._id}`, SelectedUser)
  }

  //UnBan a User
  UnBanUser(SelectedUser) {
    return this.http.patch(this.baseURL + `/UnBan/${SelectedUser._id}`, SelectedUser)
  }

  //Delete Post
  DeletePost(SelectedUser, SelectedPost) {
    return this.http.patch(this.baseURL + `/DeletePost/${SelectedUser._id}/${SelectedPost}`, SelectedUser, SelectedPost)
  }

  //Delete Comment
  DeleteComment(SelectedUser, SelectedPost, SelectedComment) {
    return this.http.patch(this.baseURL + `/DeleteComment/${SelectedUser._id}/${SelectedPost}/${SelectedComment}`, SelectedUser, SelectedPost)
  }

  //Onepost
  getonePost(Userid, Postid) {
    return this.http.get(this.baseURL + `/OnePost/${Userid}/${Postid}`)
  }

}
