import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../login-service/login-service.service';
import {ViewChild } from '@angular/core';
import {Popup} from 'ng2-opd-popup';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
      regData : any = {};
      @ViewChild('popup1') popup1: Popup;
  constructor(private _loginServiceService : LoginServiceService,private popup:Popup) { }
  
  ngOnInit() {
  }
  regFunc(){
    this._loginServiceService.registrationCheck(this.regData);
  }

  onSubmit(value: any){
    console.log(value);
    
    this.popup1.options = {
      header: "Congratulations !",
      color: "#5cb85c", // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "OK", // The text on your confirm button
      cancleBtnContent: "Cancel", // the text on your cancel button
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInUp" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
    
    this.popup.show(this.popup1.options);
  }

  YourConfirmEvent(){
    // alert('You cliked confirm');  // confirm done --> navigate to list post 
  }
}
