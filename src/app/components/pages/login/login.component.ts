import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/domain/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login = {
    username : '',
    password: ''
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    console.log(`Username: ${this.login.username} | Password: ${this.login.password}`)
    this.router.navigate(['/social/my-friends'])
  }

}
