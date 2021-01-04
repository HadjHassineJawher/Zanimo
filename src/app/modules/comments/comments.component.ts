import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Users } from 'src/app/models/Users/users';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

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

  DeleteComment(User: Users, postid, commid) {
    this.Userservice.DeleteComment(User, postid, commid).subscribe((res) => {
      this.openSnackBarfordeletecomment()
      console.log("Comment deleted successfully ")
    })
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  openSnackBarfordeletecomment() {
    this._snackBar.open('Comment Was Deleted Successfully', 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }


}
