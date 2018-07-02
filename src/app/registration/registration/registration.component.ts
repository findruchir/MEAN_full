import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../login-service/login-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
      regData : any = {};
  constructor(private _loginServiceService : LoginServiceService) { }
  
  ngOnInit() {
  }
  regFunc(){
    this._loginServiceService.registrationCheck(this.regData);
  }

}
