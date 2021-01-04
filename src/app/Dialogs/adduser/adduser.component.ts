import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/Users/users';
import { UserserviceService } from 'src/app/Services/userservice.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(public Userservice: UserserviceService, private router: Router) { }

  onChange(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.refreshCards()
    this.resetdata()
  }

  onFileSelected(event) {
    let selectedfile: File = null;
    //localStorage.setItem("file", event.target.files[0])
    selectedfile = event.target.file;
    console.log(selectedfile);
    console.log(event)
  }

  resetdata(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.Userservice.SelectedUser = {
      "_id": "",
      "nom": "",
      "prenom": "",
      "imageuser": "https://cdn.dribbble.com/users/1355613/screenshots/7108346/media/4d5498d6903b88fe4ff581d9c35a72e1.jpg",
      "mail": "",
      "numtel": "",
      "motdepasse": "",
      "status": false,
      "posts": [],
    }
  }

  refreshCards() {
    this.Userservice.getUsers().subscribe((res) => {
      this.Userservice.User = res as Users[];
    })
  }
  onSubmit(form?: NgForm) {
    this.Userservice.postUser(form.value).subscribe((res) => {
      /* this.refreshCards();
      this.router.navigate(['users']); */
      location.reload();
      console.log(form.value);
    })
  }

}
