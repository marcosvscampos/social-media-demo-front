import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFriendsComponent } from './components/main/list-friends/list-friends.component';
import { ListFeedComponent } from './components/main/list-feed/list-feed.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-friends'
  }, 
  {
    path: 'my-friends',
    component: ListFriendsComponent
  },
  {
    path: 'my-feed',
    component: ListFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
