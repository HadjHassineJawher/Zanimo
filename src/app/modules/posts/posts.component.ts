import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { PostsinfoComponent } from 'src/app/Dialogs/postsinfo/postsinfo.component';
import { Users } from 'src/app/models/Users/users';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public Userservice: UserserviceService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

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

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBarfordeletepost() {
    this._snackBar.open('Post Was Deleted Successfully', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
  DeletePost(user: Users, postid) {
    this.Userservice.DeletePost(user, postid).subscribe((res) => {
      this.openSnackBarfordeletepost();
      console.log("Posts deleted successfully");
    })
  }
  opendialogpostsinfo(userid, postid) {
    console.log(userid, postid);
    this.dialog.open(PostsinfoComponent, {
      width: '540px', height: '560px',
      data: {
        userid: userid,
        postid: postid
      }
    });
  }
}
