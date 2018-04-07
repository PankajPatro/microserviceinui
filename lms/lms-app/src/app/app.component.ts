import { Component,Inject } from '@angular/core';
import { Router } from '@angular/router';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library Management System';

  
  constructor(private router: Router, @Inject(SESSION_STORAGE) private storage: WebStorageService){}

  get userLogged() : boolean{
    var user = this.storage.get("loggedUser");
    if(user){
      return user.isValidUser;
    }
    return false;
  }

  isLoginPage: boolean = false;
 
  login(): void {
    this.isLoginPage = true;
    this.router.navigateByUrl('/login');
  }
}
