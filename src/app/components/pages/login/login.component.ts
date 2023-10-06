import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filter } from './../../../domain/filter';
import { UserService } from './../../../services/users/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyPair } from 'src/app/domain/key-pair';
import { CredentialService } from 'src/app/services/credentials/credential.service';
import { CryptoService } from 'src/app/services/crypto/crypto.service';
import { KeypairService } from 'src/app/services/keypairs/keypair.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(
    private router:Router,
    private userService:UserService,
    private keyPairService: KeypairService,
    private cryptoService: CryptoService,
    private credentialService: CredentialService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  doLogin() {
    this.searchUserByUsername();
  }

  register(){
    this.router.navigate(['/register']);
  }

  private searchUserByUsername() {
    let filter:Filter = {
      username: this.loginForm.get('username')?.value
    }
    console.log("Searching user by username: " + filter.username);
    this.userService.list(filter)
      .subscribe((response) => {
        let user = response[0];
        if(user.id){
          this.getUserKeyPairByUserId(user.id);    
        }
      })
    
  }

  private getUserKeyPairByUserId(userId:string) {
    console.log("Getting public-key from user ID: " + userId);
    this.keyPairService.getByUserId(userId)
      .subscribe((response) => {
        this.loginRequest(response);
      });
  }

  private loginRequest(keyPair:KeyPair){
    let loginRequest = this.cryptoService.encrypt(this.loginForm.value, keyPair);
    loginRequest["keyId"] = keyPair.id;
    this.credentialService.login(loginRequest)
      .subscribe(() => {
        console.log("Login made successfully!");
        this.router.navigate(['/social/my-friends']);
      });
  }
  

}
