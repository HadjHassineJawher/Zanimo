import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from 'src/app/modules/users/users.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { AdminsettingsComponent } from 'src/app/modules/adminsettings/adminsettings.component';
import { DeconnectionComponent } from 'src/app/Dialogs/deconnection/deconnection.component';
import { UserinfoComponent } from 'src/app/Dialogs/userinfo/userinfo.component';
import { PostsinfoComponent } from 'src/app/Dialogs/postsinfo/postsinfo.component';
import { DefaultComponent } from './default.component';
import { CommentsComponent } from 'src/app/modules/Comments/Comments.component';

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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { AdduserComponent } from 'src/app/Dialogs/adduser/adduser.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    DefaultComponent,
    UsersComponent,
    DashboardComponent,
    PostsComponent,
    AdminsettingsComponent,
    DeconnectionComponent,
    UserinfoComponent,
    UsersComponent,
    CommentsComponent,
    PostsinfoComponent,
    AdduserComponent,
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
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MaterialFileInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DeconnectionComponent,
    UserinfoComponent,
    AdduserComponent,
    PostsinfoComponent
  ]
})
export class DefaultModule { }
