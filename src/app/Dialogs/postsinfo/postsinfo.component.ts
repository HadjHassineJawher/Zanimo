import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Posts } from '../../models/Users/users';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-postsinfo',
  templateUrl: './postsinfo.component.html',
  styleUrls: ['./postsinfo.component.css']
})

export class PostsinfoComponent implements OnInit {
  constructor(public Userservice: UserserviceService, @Inject(MAT_DIALOG_DATA) public data: { userid, postid }, private _snackBar: MatSnackBar) { }
  user = this.data.userid;
  post = this.data.postid;

  ngOnInit(): void {
    this.getonepost(this.user, this.post);
  }

  getonepost(a, b) {
    this.Userservice.getonePost(a, b).subscribe((res) => {
      this.Userservice.Selectedpost = res as Posts[];
      console.log(this.Userservice.Selectedpost = res as Posts[]);
    })
  }
}
