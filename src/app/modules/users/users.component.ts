import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../Services/userservice.service';
import { Users } from '../../models/Users/users';

import { MatDialog } from '@angular/material/dialog';
import { UserinfoComponent } from 'src/app/Dialogs/userinfo/userinfo.component';
import { AdduserComponent } from 'src/app/Dialogs/adduser/adduser.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserserviceService]
})

export class UsersComponent implements OnInit {

  constructor(public Userservice: UserserviceService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.refreshCards();
    this.userlist();
  }
  /*
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
    }
  */
  /*
    // data from the userdatasource class
    dataSource = new UserDataSource(this.Userservice);
    displayedColumns = ['nom', 'prenom', 'email', 'numtel', 'information'];
  */

  userlist() {
    this.Userservice.getUsers().subscribe((res) => {
      this.Userservice.User = res as Users[];
    })
  }

  getoneuser(User: Users) {
    this.Userservice.getoneuser(User._id);
    console.log(User);
  }

  BanUser(User: Users) {
    this.Userservice.BanUser(User).subscribe((res) => {
      this.openSnackBarforbanninguser()
      this.refreshCards()
      console.log("User was Banned Successfully");
    })
  }

  UnBanUser(User: Users) {
    this.Userservice.UnBanUser(User).subscribe((res) => {
      this.openSnackBarforUnbanninguser()
      this.refreshCards()
      console.log("User UnBanned Successfully");
    })
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBarforUnbanninguser() {
    this._snackBar.open('User Was UnBanned Successfully', 'Close', {
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

  openSnackBarfordeleteUser() {
    this._snackBar.open('User Was Deleted Successfully', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  delete(_id: String) {
    this.Userservice.deleteUser(_id).subscribe((res) => {
      this.openSnackBarfordeleteUser()
      this.refreshCards()
    })
  }

  refreshCards() {
    this.Userservice.getUsers().subscribe((res) => {
      this.Userservice.User = res as Users[];
    })
  }

  opendialoguser(User) {
    console.log(User);
    this.dialog.open(UserinfoComponent, {
      width: '540px', height: '467px',
      data: {
        User: User
      }
    });
  }

  opendialognewuser() {
    this.dialog.open(AdduserComponent, {
      width: '550px'
    });
  }
}

/*
// class to bring all users and put them in a mat-table
export class UserDataSource extends DataSource<any>{
  constructor(private Userservice: UserserviceService) {
    super();
  }
  connect(): Observable<Users[]> {
    return this.Userservice.getuserob();
  }

  disconnect() {
  }
}*/