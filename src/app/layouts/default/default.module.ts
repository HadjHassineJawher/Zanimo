import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DefaultComponent } from './default.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    MatFormFieldModule,

  ]
})
export class DefaultModule { }
