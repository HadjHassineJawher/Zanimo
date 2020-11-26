import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../Services/userservice.service';
import { Users } from '../../models/Users/users';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserinfoComponent } from 'src/app/Dialogs/userinfo/userinfo.component';
import { AdduserComponent } from 'src/app/Dialogs/adduser/adduser.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserserviceService]
})

export class UsersComponent implements OnInit {

  constructor(public Userservice: UserserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshCards()
    this.userlist();
  }

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

  delete(_id: String) {
    this.Userservice.deleteUser(_id).subscribe((res) => {
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
      width: '360px', height: '437px',
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
}