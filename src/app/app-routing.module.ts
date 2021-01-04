import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Authentification/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminsettingsComponent } from './modules/adminsettings/adminsettings.component';
import { CommentsComponent } from './modules/Comments/Comments.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'Posts', component: PostsComponent },
      { path: 'Users', component: UsersComponent },
      { path: 'Comments', component: CommentsComponent },
      { path: 'AdminSettings', component: AdminsettingsComponent }],
  },
  { path: 'AdminLogin', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
