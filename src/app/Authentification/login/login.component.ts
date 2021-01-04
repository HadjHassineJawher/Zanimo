import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthServ: AuthentificationService, private router: Router) { }
  ngOnInit(): void {
  }

  hide = true;

  form = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  LogInInfo: any = {};

  AdminLogIn() {
    this.AuthServ.AdminAuth(this.LogInInfo).subscribe(
      result => {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/Users'])
      },
      error => console.log(error)
    )
  }
}
