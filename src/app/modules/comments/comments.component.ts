import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Users } from 'src/app/models/Users/users';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(public Userservice: UserserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userlist();
  }

  userlist() {
    this.Userservice.getUsers().subscribe((res) => {
      this.Userservice.User = res as Users[];
    })
  }

  getoneuser(User: Users) {
    this.Userservice.getoneuser(User._id);
    console.log(User);
  }

}
