import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFriendsComponent } from './components/main/list-friends/list-friends.component';
import { ListFeedComponent } from './components/main/list-feed/list-feed.component';
import { SocialComponent } from './components/pages/social/social.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'social',
    component: SocialComponent,
    children: [
      {
        path: 'my-friends',
        component: ListFriendsComponent
      },
      {
        path: 'my-feed',
        component: ListFeedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
