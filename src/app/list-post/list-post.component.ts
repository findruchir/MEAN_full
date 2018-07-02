import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
    show: boolean = false;
    datapart : any =  [];

  constructor(private _location : Location, private _http : HttpClient ) { }

  ngOnInit() {

  }
  togglediv(){
    this.show = !this.show;

    this._http.get('http://localhost:3000/listPosts').subscribe((data : any )=>{
      // console.log(data);
      // console.log(data.respdata)

      this.datapart = data.respdata;
      
});
  }
  goBack(){
    this._location.back();
  }
  
}
