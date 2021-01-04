import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from './Authentification/authentification.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminsComponent } from './modules/admins/admins.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    AuthentificationModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatTooltipModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
