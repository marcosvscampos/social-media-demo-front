import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.css']
})
export class PersonListItemComponent implements OnInit {

  @Input() person = {
    photo: '',
    name: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
