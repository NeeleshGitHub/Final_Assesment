import { Component, OnInit } from '@angular/core';
import { LoginServiceService, User } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginServiceService]
})
export class LoginComponent {
  
     public user = new User('','');
     public errorMsg = '';
  
     constructor(
         private _service:LoginServiceService) {}
  
     login() {
         if(!this._service.login(this.user)){
             this.errorMsg = 'Failed to login';
         }
     }
 }