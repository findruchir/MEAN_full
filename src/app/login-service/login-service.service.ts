import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()  
export class LoginServiceService {

  constructor(private _http : HttpClient) { }

  registrationCheck(logged : any ){
    this._http.post('http://localhost:3000/loginauth',logged).subscribe((data : any )=>{
          console.log(data);
    });
  }

}
