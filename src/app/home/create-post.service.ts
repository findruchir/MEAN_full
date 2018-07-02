import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class CreatePostService {
   //z:string=""; 
   //obj:any={};
  constructor(private _http : HttpClient, private _cookieService : CookieService) {
    
   }
  
  createPost(logged : any ){
    //this.obj=logged;
    logged.z = this._cookieService.get('tokenExample');
    console.log(logged);
    this._http.post('http://localhost:3000/createPost',logged).subscribe((data : any )=>{
    console.log(data);
  });
}
}

