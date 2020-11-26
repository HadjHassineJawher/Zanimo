import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/Admins/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  SelectedAdmin: Admin;
  Admin: Admin[];

  readonly baseURL = 'http://localhost:3030/Admins';
  constructor(private http: HttpClient) { }

  getAdmin() {
    return this.http.get(this.baseURL)
  }
}
