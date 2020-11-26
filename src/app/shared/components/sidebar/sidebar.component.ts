import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/Admins/admin';
import { AdminserviceService } from 'src/app/Services/adminservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public adminservice: AdminserviceService) { }

  ngOnInit(): void {
    this.adminlist();
  }

  adminlist() {
    this.adminservice.getAdmin().subscribe((res) => {
      this.adminservice.Admin = res as Admin[];
    })
  }
}
