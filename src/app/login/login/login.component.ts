import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../login-check/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      userdata :any = {};
        
  constructor(private _router : Router, private _loginService : LoginService) { }

  ngOnInit() {
    
  }
    regUser(){
        this._loginService.LoginCheck(this.userdata);
    }
       
 
    
}
