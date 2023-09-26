import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent implements OnInit {

  listPersons = [
    {
      photo: 'dummy-profile-photo-am',
      name: 'Amanda Pessoa',
      isFriend: true
    },
    {
      photo: 'dummy-profile-photo-fcr',
      name: 'Fabio Carlos Reis',
      isFriend: true
    },
    {
      photo: 'dummy-profile-photo-dx',
      name: 'Daniella Xavier',
      isFriend: false
    },
    {
      photo: 'dummy-profile-photo-aa',
      name: 'André Alvarenga',
      isFriend: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
