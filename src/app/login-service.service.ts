import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('neel28@gmail.com', 'nm28'),
  new User('neelesh28@gmail.com', 'nee28')
];

@Injectable()
export class LoginServiceService {

  constructor(private _router: Router, public httpService: Http) { }
  postUser(Data): Observable<any> {
    let headers = new Headers(); headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post('http://localhost:8888/user', Data, options).map
      (data => data.json());
  }

  
   logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user) {
    var authenticatedUser = users.find(u => u.email === user.email);

    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", "authenticatedUser");
      this._router.navigate(['/admin']);
      return true;
    }
    return false;

  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['Login']);
    }
  }

}