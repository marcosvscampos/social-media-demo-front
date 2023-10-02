import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ListFriendsComponent } from './components/main/list-friends/list-friends.component';
import { ListFeedComponent } from './components/main/list-feed/list-feed.component';
import { PersonListItemComponent } from './components/main/person-list-item/person-list-item.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/pages/login/login.component';
import { SocialComponent } from './components/pages/social/social.component';
import { RegisterComponent } from './components/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFriendsComponent,
    ListFeedComponent,
    PersonListItemComponent,
    LoginComponent,
    SocialComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
