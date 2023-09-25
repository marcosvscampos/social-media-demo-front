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
      name: 'Amanda Pessoa'
    },
    {
      photo: 'dummy-profile-photo-fcr',
      name: 'Fabio Carlos Reis'
    },
    {
      photo: 'dummy-profile-photo-dx',
      name: 'Daniella Xavier'
    },
    {
      photo: 'dummy-profile-photo-aa',
      name: 'André Alvarenga'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
