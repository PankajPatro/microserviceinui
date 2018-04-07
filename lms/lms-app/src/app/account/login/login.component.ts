import { Component, OnInit, Inject } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  userName : string;
  password: string;

  constructor(private router: Router, private loginService:LoginService,@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }
  
  login(){
    var user = this.loginService.login(this.userName,this.password).subscribe(data => {
      this.storage.set("loggedUser", data); 
      this.router.navigateByUrl('/home');
    });
  }
}
