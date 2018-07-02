import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Observable } from 'rxjs/observable';


@Injectable()

export class LoginService implements CanActivate{

  constructor(private _http : HttpClient, private _router : Router, private _cookieService : CookieService) { }
  canActivate():Observable<boolean>|Promise<boolean>|boolean{
    if(!this._cookieService.get('auth'))
      {
        this._router.navigate(['/login']);
        return true;
      }
    return true;
  }

  LoginCheck(logged : any ){
    this._http.post('http://localhost:3000/loginCheck',logged).subscribe((data : any )=>{
          console.log(data);
            //apply routing 
          if(!data.isLoggedIn){
            this._router.navigate(['/login']);
          }
          else{
              this._cookieService.set('auth',data.isLoggedIn);
            this._router.navigate(['/home']);
            this._cookieService.set('tokenExample',data.token); 
          }
             
    });
  }
}
