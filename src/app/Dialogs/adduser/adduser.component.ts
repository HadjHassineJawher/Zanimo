import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from 'src/app/Services/userservice.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(public Userservice: UserserviceService) { }

  ngOnInit(): void {
    this.resetdata()
  }

  resetdata(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.Userservice.SelectedUser = {
      "_id": "",
      "nom": "",
      "prenom": "",
      "imageuser": "",
      "mail": "",
      "numtel": "",
      "motdepasse": "",
      "status": false,
      "posts": [],
    }

  }

  onSubmit(form?: NgForm) {
    this.Userservice.postUser(form.value).subscribe((res) => {
      console.log('ya 3aziz haw tsab ');
    })
  }

}
