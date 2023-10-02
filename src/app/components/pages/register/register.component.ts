import { UserService } from 'src/app/services/users/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user';
import { Credential } from 'src/app/domain/credential';
import { KeyPair } from 'src/app/domain/key-pair';
import { KeypairService } from 'src/app/services/keypairs/keypair.service';
import { CredentialService } from 'src/app/services/credentials/credential.service';
import { Router } from '@angular/router';

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
    username: '',
    photo: ''
  }

  credential:Credential = {
    userId: '',
    credentialType: 'PASSWORD',
    secretValue: ''
  }

  keyPair:KeyPair = {
    userId: ''
  }

  constructor(
    private userService: UserService,
    private keyPairService: KeypairService,
    private credentialService: CredentialService,
    private router:Router
  ) { }

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
    this.createUser();  
  }

  private createUser() {
    this.userService.create(this.user)
      .subscribe((response) => {
        console.log(`Getting user at address: ${response.uri}`);
        this.getUserById(response.uri);
      });
  }
  
  private getUserById(userId: string) {
    this.userService.getById(userId)
      .subscribe((user) => {
        console.log(`Creating new key-pair for user ID: ${user.id}`);
        this.keyPair.userId = user.id;
        this.credential.userId = user.id;
        this.createKeyPair();
      });
  }
  
  private createKeyPair() {
    this.keyPairService.create(this.keyPair)
      .subscribe((response) => {
        this.credential.secretValue = this.register.confirmPassword
        this.createCredential()
      });
  }

  private createCredential(){
    this.credentialService.create(this.credential)
      .subscribe((response) => {
        console.log(`Credential created successfully for user ID: ${this.credential.userId}`);
        console.log(`Credential address: ${response.uri}`);
        this.router.navigate(['/login'])
      })
  }

}
