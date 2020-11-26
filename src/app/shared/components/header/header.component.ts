import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeconnectionComponent } from 'src/app/Dialogs/deconnection/deconnection.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tooglesidebarForMe: EventEmitter<any> = new EventEmitter()

  ToogleSidebar() {
    this.tooglesidebarForMe.emit();
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  opendialog() {
    this.dialog.open(DeconnectionComponent);
  }
}
