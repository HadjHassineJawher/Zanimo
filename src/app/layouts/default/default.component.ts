import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sidebaropen = true;


  SideBar() {
    this.sidebaropen = !this.sidebaropen;
  }
  constructor() { }

  ngOnInit(): void {
  }


}
