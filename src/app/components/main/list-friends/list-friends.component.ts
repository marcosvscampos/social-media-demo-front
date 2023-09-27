import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/domain/filter';
import { User } from 'src/app/domain/user';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent implements OnInit {

  listUsers:User[] = []

  filter:Filter = {
    name: ''
  }

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.searchByFilters()
  }

  searchByFilters(){
    this.service.list(this.filter)   
    .subscribe((items) => {
        this.listUsers = items
      })
  }

 

}
