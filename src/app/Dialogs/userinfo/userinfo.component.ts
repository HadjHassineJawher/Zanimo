
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { UserserviceService } from 'src/app/Services/userservice.service';
import { Users } from '../../models/Users/users';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})


export class UserinfoComponent implements OnInit {

  constructor(public Userservice: UserserviceService, @Inject(MAT_DIALOG_DATA) public data: { User: Users[] }) { }
  User: any;

  ngOnInit(): void {
    //this.resetdata();
    this.User = this.data.User;
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
