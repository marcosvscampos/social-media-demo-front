import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListFriendsComponent } from './components/main/list-friends/list-friends.component';
import { ListFeedComponent } from './components/main/list-feed/list-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFriendsComponent,
    ListFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
