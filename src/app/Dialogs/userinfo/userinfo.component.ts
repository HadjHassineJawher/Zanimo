
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { UserserviceService } from 'src/app/Services/userservice.service';
import { Users } from '../../models/Users/users';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})

export class UserinfoComponent implements OnInit {

  constructor(public Userservice: UserserviceService, @Inject(MAT_DIALOG_DATA) public data: { User: Users[] }, private _snackBar: MatSnackBar) { }
  User: any;

  hide = true;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    //this.resetdata();
    this.User = this.data.User;
  }

  BanUser(User: Users) {
    this.Userservice.BanUser(User).subscribe((res) => {
      this.openSnackBarforbanninguser()
      console.log("User was Banned Successfully");
    })
  }
  UnBanUser(User: Users) {
    this.Userservice.UnBanUser(User).subscribe((res) => {
      this.openSnackBarforUnbanninguser()
      console.log("User UnBanned Successfully");
    })
  }

  delete(_id: String) {
    this.Userservice.deleteUser(_id).subscribe((res) => {
      this.openSnackBarfordeleteUser()
    })
  }

  openSnackBarforUnbanninguser() {
    this._snackBar.open('User Was UnBanned Successfully', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  openSnackBarfordeleteUser() {
    this._snackBar.open('User Was Deleted Successfully', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
  openSnackBarforbanninguser() {
    this._snackBar.open('User Was Banned Successfully', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
  /*
    resetdata(form?: NgForm) {
      if (form) {
        form.reset();
      }
      this.Userservice.SelectedUser = {
        _id: "",
        nom: "",
        prenom: "",
        mail: "",
        numtel: "",
        motdepasse: ""
      }
    }
  
    onSubmit(form?: NgForm) {
      if (form.value._id == "") {
        this.Userservice.postUser(form.value).subscribe((res) => {
          console.log('ya 3aziz haw tsab ');
        })
      } else {
        this.Userservice.putuser(form.value).subscribe((res) => {
          console.log('ya 3aziz haw tbadel');
        })
      }
    }
  
    onEdit(User: Users) {
      this.Userservice.SelectedUser = User;
    }
    */
}