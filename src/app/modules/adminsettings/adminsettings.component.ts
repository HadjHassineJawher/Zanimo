import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Admin } from 'src/app/models/admins/admin';
import { AdminserviceService } from 'src/app/Services/adminservice.service';

@Component({
  selector: 'app-adminsettings',
  templateUrl: './adminsettings.component.html',
  styleUrls: ['./adminsettings.component.css']
})
export class AdminsettingsComponent implements OnInit {

  constructor(public Adminservice: AdminserviceService, private router: Router, private _snackBar: MatSnackBar) { }

  hide = true;
  form = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  ngOnInit(): void {
    this.refreshList();
    this.resetdata();
  }

  resetdata(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.Adminservice.SelectedAdmin = {
      "_id": "",
      "nom": "",
      "prenom": "",
      "image": "",
      "mail": "",
      "numtel": "",
      "motdepasse": "",
    }
  }

  refreshList() {
    this.Adminservice.getAdmin().subscribe((res) => {
      this.Adminservice.Admin = res as Admin[];
    })
  }

  onSubmit(form?: NgForm) {
    this.Adminservice.putAdmin(form.value).subscribe((res) => {
      console.log(form.value);
      this.openSnackBarforModifieAdmin();
      this.resetdata();
      console.log("Admin Information Updated");
    })
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBarforModifieAdmin() {
    this._snackBar.open('Your Information has been Saved', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  UpdateAdmin(ad: Admin) {
    this.Adminservice.SelectedAdmin = ad;
    console.log("Loaded in the Form")
  }
}
