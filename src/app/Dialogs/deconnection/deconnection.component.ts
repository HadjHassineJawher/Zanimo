import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-deconnection',
  templateUrl: './deconnection.component.html',
  styleUrls: ['./deconnection.component.css']
})
export class DeconnectionComponent implements OnInit {

  constructor(public AuthService: AuthentificationService) { }

  ngOnInit(): void {
  }

}
