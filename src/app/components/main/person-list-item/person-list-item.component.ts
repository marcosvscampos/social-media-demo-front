import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.css']
})
export class PersonListItemComponent implements OnInit {

  @Input() user:User = {
    id: '',
    photo: '',
    name: '',
    //isFriend: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
