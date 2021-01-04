import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private router: Router) { }

  private readonly AuthBaseURL = 'http://localhost:3030/Users/Admin/Authentification';

  AdminAuth(Admin) {
    return this.http.post<any>(this.AuthBaseURL, Admin);
  }

  //If Admin is lodded in Return True else return false 
  AdminLoggedIn() {
    return !!localStorage.getItem('token')
  }

  // Retriving the token from Localsorage
  GetToken() {
    return localStorage.getItem('token')
  }

  AdminLogOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/AdminLogin'])
  }
}
