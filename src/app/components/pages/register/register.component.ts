import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = {
    password: '',
    confirmPassword: '',
    fileName: ''
  }

  user:User = {
    name: '',
    photo: ''
  }

  constructor() { }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.register.fileName = file.name;
    if(file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // O conteúdo do arquivo em base64 estará disponível em e.target.result
        this.user.photo = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
  }

  doRegister(){
    var values = `${this.user.name} - ${this.register.password} - ${this.register.confirmPassword} - ${this.user.photo}`
    console.log(values)
  }

}
