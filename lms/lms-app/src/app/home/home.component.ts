import { Component, OnInit, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  get userLogged() : boolean{
    var user = this.storage.get("loggedUser");
    if(user){
      return user.isValidUser;
    }
    return false;
  }

}
