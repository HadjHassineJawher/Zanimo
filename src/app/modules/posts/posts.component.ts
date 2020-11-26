import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostsinfoComponent } from 'src/app/Dialogs/postsinfo/postsinfo.component';
import { Users } from 'src/app/models/Users/users';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

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

  opendialogpostsinfo() {
    this.dialog.open(PostsinfoComponent);
  }

}
